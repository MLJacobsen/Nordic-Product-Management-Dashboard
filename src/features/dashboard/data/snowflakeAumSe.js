/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-27 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-25';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58434 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55698 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54172 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53700 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38528 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37005 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34986 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26133 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22705 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22632 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20895 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19703 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17109 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15918 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12861 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12071 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9878 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9324 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9078 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8618 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6388 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3329 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3147 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2662 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2410 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2043 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1926 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1763 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1394 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1116 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1070 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 372 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 362 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 335 },
];

export default snowflakeAumSe;
