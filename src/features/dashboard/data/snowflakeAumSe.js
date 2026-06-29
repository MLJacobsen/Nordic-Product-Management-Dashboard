/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-06-17';

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 55912 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 53589 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53532 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 51259 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 37539 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37326 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35102 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 27213 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22568 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21557 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20047 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19377 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16861 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16054 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12641 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11778 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9031 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8793 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8593 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8285 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6196 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3336 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3187 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2543 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2257 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 1977 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1875 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1615 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1376 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1074 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1022 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 345 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 328 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 162 },
];

export default snowflakeAumSe;
