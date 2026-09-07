/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-09-07 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-09-04';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59486 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56852 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54307 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54514 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38814 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37043 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35858 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26912 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22578 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22664 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 21071 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19815 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17046 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15910 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12838 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12180 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9948 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9234 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9077 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8696 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6385 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3279 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3143 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2676 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2414 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2052 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1951 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1808 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1402 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1130 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1068 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 381 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 368 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 364 },
];

export default snowflakeAumSe;
