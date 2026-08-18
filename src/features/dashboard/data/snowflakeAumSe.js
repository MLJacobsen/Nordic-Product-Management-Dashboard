/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-07-31';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 57531 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54301 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53713 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 52553 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34261 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37883 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35947 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25623 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22542 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22314 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20498 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19601 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16865 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15924 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12808 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11867 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9120 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9625 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8854 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8462 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6348 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3510 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3148 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2605 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2367 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2028 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1877 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1717 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1397 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1095 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1040 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 358 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 349 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 276 },
];

export default snowflakeAumSe;
