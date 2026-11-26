/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-26 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-24';
export const valuationDate = aumSeDataDate;
export const lastUpdated = '2026-11-26T10:04:32';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58052 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 53130 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53543 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53876 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38183 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36627 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 31810 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26421 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21792 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22147 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20495 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20206 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17933 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15564 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13116 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11882 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8797 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8697 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8724 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8550 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6454 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3204 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3080 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2632 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2585 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2067 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1785 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1908 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1383 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1115 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1056 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 427 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 366 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 593 },
];

export default snowflakeAumSe;
