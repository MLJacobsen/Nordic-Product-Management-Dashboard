/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-26 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-06-26';

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 57364 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54544 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53962 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 52454 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35955 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37774 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35650 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26268 },
  { fundId: 'SPPPEM', name: 'Storebrand KortrÃ¤nta', aumMillSek: 22573 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21491 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20019 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN FÃ¶retagsobligation', aumMillSek: 19432 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16913 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16134 },
  { fundId: 'SPPGRO', name: 'Storebrand GrÃ¶n Obligation', aumMillSek: 12732 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11883 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9041 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield FÃ¶retagsobligation', aumMillSek: 8958 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8741 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8392 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y ', aumMillSek: 6214 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige SmÃ¥bolag Plus', aumMillSek: 3336 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3199 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & VÃ¤rlden', aumMillSek: 2570 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2315 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2001 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y ', aumMillSek: 1863 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1677 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1392 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1088 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1037 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 355 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 334 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets ', aumMillSek: 204 },
];

export default snowflakeAumSe;
