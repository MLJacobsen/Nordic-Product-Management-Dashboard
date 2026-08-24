# Snowflake Integration Setup

## How to connect real Snowflake data to the dashboard

The dashboard is pre-configured to display AUM data from Snowflake. Currently it uses **mock data**. To activate real data:

### Step 1: Add GitHub Secrets

Go to your repo → Settings → Secrets and variables → Actions → New repository secret.

Add these 6 secrets:

| Secret Name | Example Value | Description |
|---|---|---|
| `SNOWFLAKE_ACCOUNT` | `storebrand.west-europe.azure` | Your Snowflake account identifier |
| `SNOWFLAKE_USERNAME` | `svc_github_readonly` | Service account username |
| `SNOWFLAKE_PASSWORD` | `(your password)` | Service account password |
| `SNOWFLAKE_WAREHOUSE` | `COMPUTE_WH` | Warehouse to use for queries |
| `SNOWFLAKE_DATABASE` | `PROD` | Database containing fund data |
| `SNOWFLAKE_SCHEMA` | `FUND_DATA` | Schema containing the AUM table |

### Step 2: Adjust SQL queries (if needed)

Edit `scripts/sync-snowflake-aum.js` and update the SQL queries to match your actual table and column names. The current queries assume:

```sql
-- Table: FUND_AUM
-- Columns: FUND_ID, FUND_NAME, AUM_MILL_NOK, AUM_MILL_EUR, DOMICILE, REPORT_DATE
```

### Step 3: Run the workflow

- **Manual**: Go to Actions → "Snowflake AUM Data Sync" → Run workflow
- **Automatic**: Runs daily at 09:00 CET

The workflow queries Snowflake, writes JSON files, and commits them to the repo. The dashboard then displays real data on next build/deploy.

### File flow

```
Snowflake DB
    ↓ (GitHub Actions - daily)
scripts/sync-snowflake-aum.js
    ↓ (writes)
src/features/dashboard/data/snowflakeAum.json    (NO funds)
src/features/dashboard/data/snowflakeAumLux.json (LU funds)
    ↓ (imported by)
AumOverview.jsx / AumOverviewLux.jsx
    ↓ (displayed in)
Dashboard
```

### Alternative: Paste data manually

If you prefer not to set up the pipeline, you can:
1. Run the AUM query in Snowsight
2. Export as JSON
3. Save as `src/features/dashboard/data/snowflakeAum.json` (NO) or `snowflakeAumLux.json` (LU)

Expected JSON format:
```json
[
  { "fundId": "stb-aksje-innland", "name": "Storebrand Aksje Innland", "aumMillNok": 8432 },
  ...
]
```
