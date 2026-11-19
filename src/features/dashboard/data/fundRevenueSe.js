/**
 * Revenue estimation for SE-domiciled (SPP) funds.
 * Revenue = AUM (MSEK) x Ongoing Charge per year.
 * AUM from Snowflake (live data as of 2026-11-17).
 */
export const revenueSeDataDate = '2026-11-17';
export const valuationDate = revenueSeDataDate;
export const lastUpdated = '2026-11-19T10:04:47+01:00';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58284, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 54389, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53774, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54137, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38579, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 37178, terPct: 0.21 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 32015, terPct: 0.52 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26135, terPct: 0.43 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22400, terPct: 0.31 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22065, terPct: 0.21 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20959, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20106, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17842, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15553, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13096, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12010, terPct: 0.80 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8761, terPct: 0.51 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8710, terPct: 0.21 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8835, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8650, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6445, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3257, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3059, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2673, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2566, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2066, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1803, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1891, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1384, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1123, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1073, terPct: 0.46 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 430, terPct: 0.80 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 364, terPct: 0.41 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 587, terPct: 0.31 },
];

export default fundRevenueSe.map((fund) => ({
  ...fund,
  estRevenueMillSek: (fund.aumMillSek * fund.terPct) / 100,
}));
