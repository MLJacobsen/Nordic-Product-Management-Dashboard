/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-28 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-26';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58788 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56130 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54352 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54032 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38723 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37138 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35516 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26554 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22722 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22630 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20965 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19646 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17147 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15947 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12869 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12125 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9973 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9429 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9138 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8664 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6385 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3330 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3152 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2674 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2426 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2050 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1926 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1781 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1397 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1125 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1074 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 374 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 365 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 337 },
];

export default snowflakeAumSe;
