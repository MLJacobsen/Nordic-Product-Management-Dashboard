/**
 * AUM data for Luxembourg-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-09-07 (live Snowflake query via Copilot MCP)
 */
export const luxShareClassCount = 26;
export const aumLuxDataDate = '2026-09-04';

const snowflakeAumLux = [
  { fundId: 'LUXGLOPLU', name: 'Storebrand SICAV - Global Plus Lux', aumMillEur: 237 },
  { fundId: 'LUXEMEP', name: 'Storebrand SICAV - Emerging Markets Plus Lux', aumMillEur: 208 },
  { fundId: 'LUXUPL', name: 'Storebrand SICAV - US Plus Lux', aumMillEur: 206 },
  { fundId: 'LUXSKAKONTIKI', name: 'Storebrand SICAV - SKAGEN Kon-Tiki Lux', aumMillEur: 113 },
  { fundId: 'LUXGLOGLT', name: 'Storebrand SICAV - Global Solutions Lux', aumMillEur: 47 },
  { fundId: 'LUXSKAGLOBAL', name: 'Storebrand SICAV - SKAGEN Global Lux', aumMillEur: 10 },
  { fundId: 'LUXSKAFOCUS', name: 'Storebrand SICAV - SKAGEN Focus Lux', aumMillEur: 4 },
];

export default snowflakeAumLux;
