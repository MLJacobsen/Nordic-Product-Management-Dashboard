/**
 * AUM data for Ireland-domiciled funds.
 * Only 2 funds domiciled in Ireland, traded via AMX UCITS CCF platform.
 * Manual AUM figures as at 29 May 2025 (not yet in Snowflake).
 */
const snowflakeAumIre = [
  { fundId: 'ire-global-plus', name: 'AMX UCITS CCF - Storebrand - Global Plus', isin: 'IE000HZSK3O1', aumUsd: 1315164877.17, asOfDate: '2025-05-29' },
  { fundId: 'ire-em-plus', name: 'AMX UCITS CCF - Storebrand - Emerging Markets Plus', isin: 'IE000U1WTGT2', aumUsd: 368049908.93, asOfDate: '2025-05-29' },
];

export default snowflakeAumIre;
