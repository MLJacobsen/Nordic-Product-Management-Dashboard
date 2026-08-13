/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-13 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-11';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59071 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55683 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54254 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54126 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38543 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36717 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34414 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25643 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22565 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22547 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20751 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19647 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16985 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15979 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12843 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12106 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9938 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9383 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9207 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8621 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6381 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3563 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3152 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2658 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2404 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2049 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1888 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1773 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1414 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1114 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1065 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 369 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 363 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 316 },
];

export default snowflakeAumSe;
