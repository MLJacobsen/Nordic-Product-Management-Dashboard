/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-07-03, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
export const revenueSeDataDate = '2026-07-03';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58067, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54791, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54278, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53141, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38227, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36438, terPct: 0.21 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35862, terPct: 0.52 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26665, terPct: 0.43 },
  { fundId: 'SPPPEM', name: 'Storebrand KortrÃ¤nta', aumMillSek: 22584, terPct: 0.21 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22267, terPct: 0.31 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20607, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN FÃ¶retagsobligation', aumMillSek: 19508, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16980, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16162, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand GrÃ¶n Obligation', aumMillSek: 12869, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12035, terPct: 0.80 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9279, terPct: 0.21 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield FÃ¶retagsobligation', aumMillSek: 9262, terPct: 0.51 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8949, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8517, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6333, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige SmÃ¥bolag Plus', aumMillSek: 3553, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3199, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & VÃ¤rlden', aumMillSek: 2616, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2331, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2015, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1901, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1681, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1405, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1106, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1055, terPct: 0.46 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 358, terPct: 0.41 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 345, terPct: 0.80 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 206, terPct: 0.31 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}));

export default fundRevenueSeWithCalc;
