/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-18 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-16';
export const valuationDate = '2026-11-16';
export const lastUpdated = '2026-11-18T10:08:26+01:00';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58868 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55006 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54118 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54767 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38978 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37796 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 32489 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26320 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22753 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22089 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 21304 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20098 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17790 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15600 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13068 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12141 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8755 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8815 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8977 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8750 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6437 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3304 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3068 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2708 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2583 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2070 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1798 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1912 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1393 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1140 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1091 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 435 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 369 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 600 },
];

export default snowflakeAumSe;
