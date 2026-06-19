/**
 * AUM data for Ireland-domiciled funds.
 * Note: No IE-domiciled funds currently exist in Snowflake
 * (DWH_SAM.CONFORMED_DIM.DIM_FUND only has NO, SE, LU domiciles).
 * These are placeholder entries — update when IE funds are onboarded in SCD/Wolf.
 */
const snowflakeAumIre = [
  { fundId: 'ire-global-all-countries', name: 'Storebrand Global All Countries ESG', aumMillEur: null },
  { fundId: 'ire-us-equity', name: 'Storebrand US Equity ESG', aumMillEur: null },
  { fundId: 'ire-europe-equity', name: 'Storebrand Europe Equity ESG', aumMillEur: null },
  { fundId: 'ire-nordic-equity', name: 'Storebrand Nordic Equity ESG', aumMillEur: null },
  { fundId: 'ire-em-equity', name: 'Storebrand Emerging Markets Equity ESG', aumMillEur: null },
  { fundId: 'ire-global-corp-bond', name: 'Storebrand Global Corporate Bond ESG', aumMillEur: null },
  { fundId: 'ire-global-govt-bond', name: 'Storebrand Global Government Bond ESG', aumMillEur: null },
  { fundId: 'ire-global-green-bond', name: 'Storebrand Global Green Bond', aumMillEur: null },
  { fundId: 'ire-climate-transition', name: 'Storebrand Climate Transition Fund', aumMillEur: null },
  { fundId: 'ire-smart-cities', name: 'Storebrand Smart Cities Fund', aumMillEur: null },
  { fundId: 'ire-skagen-global', name: 'SKAGEN Global Value', aumMillEur: null },
  { fundId: 'ire-skagen-em', name: 'SKAGEN Emerging Markets', aumMillEur: null },
];

export default snowflakeAumIre;
