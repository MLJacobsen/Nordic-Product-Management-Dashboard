/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-06 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-04';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59361 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55572 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54398 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54125 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38649 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36496 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34264 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25572 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22789 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22540 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20957 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19612 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16970 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16048 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12850 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12120 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9651 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9140 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9138 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8644 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6381 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3591 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3170 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2666 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2401 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2046 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1879 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1788 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1420 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1123 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1057 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 370 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 361 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 315 },
];

export default snowflakeAumSe;
