/**
 * Snowflake AUM data sync script.
 * Queries Storebrand's Snowflake for fund AUM data and writes JSON files
 * that the dashboard reads at build time.
 *
 * Required GitHub Secrets:
 *   SNOWFLAKE_ACCOUNT    - e.g. "storebrand.west-europe.azure"
 *   SNOWFLAKE_USERNAME   - Your Snowflake username
 *   SNOWFLAKE_PASSWORD   - Your Snowflake password
 *   SNOWFLAKE_WAREHOUSE  - e.g. "COMPUTE_WH"
 *   SNOWFLAKE_DATABASE   - e.g. "PROD"
 *   SNOWFLAKE_SCHEMA     - e.g. "FUND_DATA"
 *
 * Adjust the SQL queries below to match your actual table/column names.
 */

const snowflake = require('snowflake-sdk');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'features', 'dashboard', 'data');

const connection = snowflake.createConnection({
  account: process.env.SNOWFLAKE_ACCOUNT,
  username: process.env.SNOWFLAKE_USERNAME,
  password: process.env.SNOWFLAKE_PASSWORD,
  warehouse: process.env.SNOWFLAKE_WAREHOUSE,
  database: process.env.SNOWFLAKE_DATABASE,
  schema: process.env.SNOWFLAKE_SCHEMA,
});

function connect() {
  return new Promise((resolve, reject) => {
    connection.connect((err, conn) => {
      if (err) reject(err);
      else resolve(conn);
    });
  });
}

function executeQuery(sql) {
  return new Promise((resolve, reject) => {
    connection.execute({
      sqlText: sql,
      complete: (err, stmt, rows) => {
        if (err) reject(err);
        else resolve(rows);
      },
    });
  });
}

// ─── Adjust these queries to match your Snowflake schema ───────────────────

const QUERY_NO = `
  SELECT
    FUND_ID AS "fundId",
    FUND_NAME AS "name",
    AUM_MILL_NOK AS "aumMillNok"
  FROM FUND_AUM
  WHERE REPORT_DATE = (SELECT MAX(REPORT_DATE) FROM FUND_AUM WHERE DOMICILE = 'NO')
    AND DOMICILE = 'NO'
  ORDER BY AUM_MILL_NOK DESC
`;

const QUERY_LUX = `
  SELECT
    FUND_ID AS "fundId",
    FUND_NAME AS "name",
    AUM_MILL_EUR AS "aumMillEur"
  FROM FUND_AUM
  WHERE REPORT_DATE = (SELECT MAX(REPORT_DATE) FROM FUND_AUM WHERE DOMICILE = 'LU')
    AND DOMICILE = 'LU'
  ORDER BY AUM_MILL_EUR DESC
`;

// ────────────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Connecting to Snowflake...');
  await connect();
  console.log('Connected.');

  console.log('Querying NO-domiciled fund AUM...');
  const noFunds = await executeQuery(QUERY_NO);
  const noOutput = JSON.stringify(noFunds, null, 2);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'snowflakeAum.json'), noOutput);
  console.log(`  → ${noFunds.length} NO funds written.`);

  console.log('Querying LU-domiciled fund AUM...');
  const luxFunds = await executeQuery(QUERY_LUX);
  const luxOutput = JSON.stringify(luxFunds, null, 2);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'snowflakeAumLux.json'), luxOutput);
  console.log(`  → ${luxFunds.length} LU funds written.`);

  console.log('Done. Data files updated.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Snowflake sync failed:', err.message);
  process.exit(1);
});
