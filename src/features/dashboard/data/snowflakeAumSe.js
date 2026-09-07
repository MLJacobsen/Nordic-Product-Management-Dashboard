/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-09-07 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-31';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59230 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56528 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54310 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54320 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38798 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37059 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35722 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26748 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22666 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22675 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 21069 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19743 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17008 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15915 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12832 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12157 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9952 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9156 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9260 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8688 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6388 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3250 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3143 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2676 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2427 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2050 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1951 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1787 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1398 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1126 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1070 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 378 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 366 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 337 },
];

export default snowflakeAumSe;
