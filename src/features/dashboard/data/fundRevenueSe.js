/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-08-14, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
export const revenueSeDataDate = '2026-08-14';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59399, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56154, terPct: 0.31 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54461, terPct: 0.41 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54286, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38631, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36794, terPct: 0.21 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35247, terPct: 0.52 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26220, terPct: 0.43 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22531, terPct: 0.21 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22425, terPct: 0.31 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20599, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19690, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17058, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15928, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12858, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'Storebrand Mix 80', aumMillSek: 12147, terPct: 0.80 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9946, terPct: 0.51 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9622, terPct: 0.21 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9249, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8646, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y ', aumMillSek: 6378, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3574, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3143, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2660, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2407, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'Storebrand Mix 20', aumMillSek: 2038, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y ', aumMillSek: 1889, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1814, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'Storebrand Mix 50', aumMillSek: 1413, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'Storebrand Mix 100', aumMillSek: 1121, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1069, terPct: 0.46 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 369, terPct: 0.41 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 368, terPct: 0.80 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets ', aumMillSek: 318, terPct: 0.31 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({{
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}}));

export default fundRevenueSeWithCalc;
