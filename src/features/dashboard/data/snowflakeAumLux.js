/**
 * AUM data for Luxembourg-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-10-01 (live Snowflake query via Copilot MCP)
 */
export const luxShareClassCount = 24;
export const aumLuxDataDate = '2026-10-01';

const snowflakeAumLux = [
  { fundId: 'LUXGLOPLU', name: 'Storebrand SICAV - Global Plus Lux', aumMillEur: 241 },
  { fundId: 'LUXEMEP', name: 'Storebrand SICAV - Emerging Markets Plus Lux', aumMillEur: 213 },
  { fundId: 'LUXUPL', name: 'Storebrand SICAV - US Plus Lux', aumMillEur: 211 },
  { fundId: 'LUXSKAKONTIKI', name: 'Storebrand SICAV - SKAGEN Kon-Tiki Lux', aumMillEur: 114 },
  { fundId: 'LUXGLOGLT', name: 'Storebrand SICAV - Global Solutions Lux', aumMillEur: 47 },
  { fundId: 'LUXSKAGLOBAL', name: 'Storebrand SICAV - SKAGEN Global Lux', aumMillEur: 10 },
  { fundId: 'LUXSKAFOCUS', name: 'Storebrand SICAV - SKAGEN Focus Lux', aumMillEur: 4 },
];

export default snowflakeAumLux;
