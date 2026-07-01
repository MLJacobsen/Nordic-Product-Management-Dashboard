/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-06-29, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
export const revenueSeDataDate = '2026-06-29';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58279, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55027, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54149, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 52996, terPct: 0.41 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35985, terPct: 0.52 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37999, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35753, terPct: 0.21 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26508, terPct: 0.43 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22602, terPct: 0.21 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21546, terPct: 0.31 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20096, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19461, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16910, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16157, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12733, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11960, terPct: 0.80 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9070, terPct: 0.21 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9014, terPct: 0.51 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8823, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8446, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6214, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3337, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3202, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2588, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2318, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2004, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1863, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1699, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1398, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1097, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1040, terPct: 0.46 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 359, terPct: 0.41 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 337, terPct: 0.80 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 206, terPct: 0.31 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}));

export default fundRevenueSeWithCalc;
