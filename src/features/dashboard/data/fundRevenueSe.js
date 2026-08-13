/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-08-11, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
export const revenueSeDataDate = '2026-08-11';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59071, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55683, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54254, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54126, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38543, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36717, terPct: 0.21 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 34414, terPct: 0.52 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 25643, terPct: 0.43 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22565, terPct: 0.21 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22547, terPct: 0.31 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20751, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19647, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16985, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15979, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12843, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12106, terPct: 0.80 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9938, terPct: 0.51 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9383, terPct: 0.21 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9207, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8621, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6381, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3563, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3152, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2658, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2404, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2049, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1888, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1773, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1414, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1114, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1065, terPct: 0.46 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 369, terPct: 0.41 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 363, terPct: 0.80 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 316, terPct: 0.31 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}));

export default fundRevenueSeWithCalc;
