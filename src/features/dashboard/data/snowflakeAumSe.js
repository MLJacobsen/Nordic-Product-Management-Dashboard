/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-10-01 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-10-01';
export const seShareClassCount = 143;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 60995 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56339 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 56055 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54448 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 39278 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 37399 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36478 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 28743 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22559 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21783 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20587 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19915 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16901 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15780 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12763 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12267 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9663 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9622 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9082 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8802 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6325 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3130 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3101 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2696 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2367 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2051 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1930 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1912 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1407 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1153 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1057 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 408 },
  { fundId: 'SPPSAC', name: 'Storebrand Sverige All Cap', aumMillSek: 385 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 379 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 376 },
];

export default snowflakeAumSe;
