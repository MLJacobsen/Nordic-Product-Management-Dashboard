/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-06-26, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
export const revenueSeDataDate = '2026-06-26';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 57364, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54544, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53962, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 52454, terPct: 0.41 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35955, terPct: 0.52 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37774, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35650, terPct: 0.21 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26268, terPct: 0.43 },
  { fundId: 'SPPPEM', name: 'Storebrand KortrÃ¤nta', aumMillSek: 22573, terPct: 0.21 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21491, terPct: 0.31 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20019, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN FÃ¶retagsobligation', aumMillSek: 19432, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16913, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16134, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand GrÃ¶n Obligation', aumMillSek: 12732, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11883, terPct: 0.80 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9041, terPct: 0.21 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield FÃ¶retagsobligation', aumMillSek: 8958, terPct: 0.51 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8741, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8392, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y ', aumMillSek: 6214, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige SmÃ¥bolag Plus', aumMillSek: 3336, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3199, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & VÃ¤rlden', aumMillSek: 2570, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2315, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2001, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y ', aumMillSek: 1863, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1677, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1392, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1088, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1037, terPct: 0.46 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 355, terPct: 0.41 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 334, terPct: 0.80 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets ', aumMillSek: 204, terPct: 0.31 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}));

export default fundRevenueSeWithCalc;
