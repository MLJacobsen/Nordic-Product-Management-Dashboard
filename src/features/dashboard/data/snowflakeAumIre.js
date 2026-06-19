/**
 * AUM data for Ireland-domiciled funds.
 * Only 2 funds domiciled in Ireland, traded via AMX UCITS CCF platform.
 * Note: IE funds are not yet in Snowflake — AUM values set to null.
 * Update when IE funds are onboarded in SCD/Wolf.
 */
const snowflakeAumIre = [
  { fundId: 'ire-global-plus', name: 'Storebrand Global Plus', isin: 'IE000HZSK3O1', aumMillEur: null },
  { fundId: 'ire-em-plus', name: 'Storebrand Emerging Markets Plus', isin: 'IE000U1WTGT2', aumMillEur: null },
];

export default snowflakeAumIre;
