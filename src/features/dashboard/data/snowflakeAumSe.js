/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-24 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-20';
export const valuationDate = '2026-11-20';
export const lastUpdated = '2026-11-24T10:03:12+01:00';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 55532 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 51258 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 52713 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 51834 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37257 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36135 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 30799 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25399 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21585 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22174 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20285 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20207 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17993 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15427 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13124 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11613 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8703 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8447 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8579 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8330 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6459 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3172 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3039 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2570 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2521 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2054 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1801 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1831 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1360 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1083 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1041 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 413 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 347 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 565 },
];

export default snowflakeAumSe;
