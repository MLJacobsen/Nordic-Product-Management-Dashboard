/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-24 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-20';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58184 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55348 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53907 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53398 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34913 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38210 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36632 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26022 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22531 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22304 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20481 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19658 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17063 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15870 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12865 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11996 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9297 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9943 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9038 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8545 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6368 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3405 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3135 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2630 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2390 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2036 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1889 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1761 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1402 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1102 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1064 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 362 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 364 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 312 },
];

export default snowflakeAumSe;
