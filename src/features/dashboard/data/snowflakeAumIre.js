/**
 * AUM data for Ireland-domiciled funds sourced from Snowflake.
 * Connection: Storebrand Snowflake → GitHub Actions → JSON export
 * Query: SELECT FUND_ID, FUND_NAME, AUM_EUR_MILL FROM PROD.FUND_DATA.FUND_AUM
 *        WHERE REPORT_DATE = CURRENT_DATE() AND DOMICILE = 'IE'
 *
 * TODO: Replace mock data with live Snowflake integration via GitHub Actions secret.
 */
const snowflakeAumIre = [
  // Storebrand ICAV / UCITS ETF funds
  { fundId: 'ire-global-all-countries', name: 'Storebrand Global All Countries ESG', aumMillEur: 3456 },
  { fundId: 'ire-us-equity', name: 'Storebrand US Equity ESG', aumMillEur: 2987 },
  { fundId: 'ire-europe-equity', name: 'Storebrand Europe Equity ESG', aumMillEur: 1876 },
  { fundId: 'ire-nordic-equity', name: 'Storebrand Nordic Equity ESG', aumMillEur: 2345 },
  { fundId: 'ire-em-equity', name: 'Storebrand Emerging Markets Equity ESG', aumMillEur: 1234 },
  { fundId: 'ire-global-corp-bond', name: 'Storebrand Global Corporate Bond ESG', aumMillEur: 1654 },
  { fundId: 'ire-global-govt-bond', name: 'Storebrand Global Government Bond ESG', aumMillEur: 987 },
  { fundId: 'ire-global-green-bond', name: 'Storebrand Global Green Bond', aumMillEur: 765 },
  { fundId: 'ire-climate-transition', name: 'Storebrand Climate Transition Fund', aumMillEur: 543 },
  { fundId: 'ire-smart-cities', name: 'Storebrand Smart Cities Fund', aumMillEur: 432 },

  // SKAGEN Ireland-domiciled
  { fundId: 'ire-skagen-global', name: 'SKAGEN Global Value', aumMillEur: 1876 },
  { fundId: 'ire-skagen-em', name: 'SKAGEN Emerging Markets', aumMillEur: 987 },
];

export default snowflakeAumIre;
