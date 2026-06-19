/**
 * AUM data for Luxembourg-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
const snowflakeAumLux = [
  { fundId: 'LUXGLOPLU', name: 'Storebrand SICAV - Global Plus Lux', aumMillEur: 229 },
  { fundId: 'LUXEMEP', name: 'Storebrand SICAV - Emerging Markets Plus Lux', aumMillEur: 220 },
  { fundId: 'LUXUPL', name: 'Storebrand SICAV - US Plus Lux', aumMillEur: 193 },
  { fundId: 'LUXSKAKONTIKI', name: 'Storebrand SICAV - SKAGEN Kon-Tiki Lux', aumMillEur: 120 },
  { fundId: 'LUXGLOGLT', name: 'Storebrand SICAV - Global Solutions Lux', aumMillEur: 46 },
  { fundId: 'LUXSKAGLOBAL', name: 'Storebrand SICAV - SKAGEN Global Lux', aumMillEur: 9 },
  { fundId: 'LUXSKAFOCUS', name: 'Storebrand SICAV - SKAGEN Focus Lux', aumMillEur: 7 },
];

export default snowflakeAumLux;
