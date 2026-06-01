/**
 * AUM data for Luxembourg-domiciled funds sourced from Snowflake.
 * Connection: Storebrand Snowflake → GitHub Actions → JSON export
 * Query: SELECT FUND_ID, FUND_NAME, AUM_EUR_MILL FROM PROD.FUND_DATA.FUND_AUM
 *        WHERE REPORT_DATE = CURRENT_DATE() AND DOMICILE = 'LU'
 *
 * TODO: Replace mock data with live Snowflake integration via GitHub Actions secret.
 */
const snowflakeAumLux = [
  // Storebrand SICAV funds
  { fundId: 'lux-global-solutions', name: 'Storebrand Global Solutions', aumMillEur: 4523 },
  { fundId: 'lux-global-esg-plus', name: 'Storebrand Global ESG Plus', aumMillEur: 6789 },
  { fundId: 'lux-global-multi-asset', name: 'Storebrand Global Multi Asset', aumMillEur: 2345 },
  { fundId: 'lux-european-high-yield', name: 'Storebrand European High Yield', aumMillEur: 1876 },
  { fundId: 'lux-nordic-credit', name: 'Storebrand Nordic Credit', aumMillEur: 3214 },
  { fundId: 'lux-global-corp-bond', name: 'Storebrand Global Corporate Bond', aumMillEur: 2987 },
  { fundId: 'lux-emerging-markets', name: 'Storebrand Emerging Markets', aumMillEur: 1543 },
  { fundId: 'lux-global-value', name: 'Storebrand Global Value', aumMillEur: 2156 },
  { fundId: 'lux-nordic-equity', name: 'Storebrand Nordic Equity', aumMillEur: 3876 },
  { fundId: 'lux-sustainable-bond', name: 'Storebrand Sustainable Bond Fund', aumMillEur: 1234 },
  { fundId: 'lux-climate-aware', name: 'Storebrand Climate Aware Fund', aumMillEur: 987 },
  { fundId: 'lux-equal-opp-global', name: 'Storebrand Equal Opportunities Global', aumMillEur: 1654 },

  // SKAGEN SICAV funds
  { fundId: 'lux-skagen-global', name: 'SKAGEN Global A', aumMillEur: 5432 },
  { fundId: 'lux-skagen-focus', name: 'SKAGEN Focus A', aumMillEur: 2876 },
  { fundId: 'lux-skagen-kon-tiki', name: 'SKAGEN Kon-Tiki A', aumMillEur: 3214 },
  { fundId: 'lux-skagen-m2', name: 'SKAGEN m2 A', aumMillEur: 1987 },
];

export default snowflakeAumLux;
