/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-19 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-17';
export const valuationDate = aumSeDataDate;
export const lastUpdated = '2026-11-19T10:04:47+01:00';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58284 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54389 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53774 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54137 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38579 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37178 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 32015 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26135 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22400 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22065 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20959 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20106 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17842 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15553 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13096 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12010 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8761 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8710 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8835 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8650 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6445 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3257 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3059 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2673 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2566 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2066 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1803 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1891 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1384 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1123 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1073 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 430 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 364 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 587 },
];

export default snowflakeAumSe;
