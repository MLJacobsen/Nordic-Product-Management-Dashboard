/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-10 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-06';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58871 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55328 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54251 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53837 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34214 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38520 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36465 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25518 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22529 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22761 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20945 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19645 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16975 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16014 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12842 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12080 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9306 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9897 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9036 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8615 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6352 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3588 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3164 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2659 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2403 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2044 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1886 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1768 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1411 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1113 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1056 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 367 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 361 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 314 },
];

export default snowflakeAumSe;
