/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-23 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-19';
export const valuationDate = aumSeDataDate;
export const lastUpdated = '2026-11-23T09:10:03Z';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 57503 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 52839 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53439 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53468 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38192 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36698 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 31755 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25953 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22225 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22168 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20780 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20199 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17897 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15508 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13084 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11892 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8794 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8714 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8871 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8558 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6437 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3244 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3051 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2643 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2539 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2061 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1797 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1867 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1380 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1115 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1057 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 425 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 359 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 582 },
];

export default snowflakeAumSe;
