/**
 * Revenue estimation for SE-domiciled (SPP) funds.
 * Revenue = AUM (MSEK) x Ongoing Charge per year.
 * AUM from Snowflake (live data as of 2026-10-01).
 */
export const revenueSeDataDate = '2026-10-01';

const fundRevenueSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 60995, terPct: 0.20 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56339, terPct: 0.31 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54448, terPct: 0.41 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 56055, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 39278, terPct: 0.41 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36478, terPct: 0.21 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 37399, terPct: 0.52 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 28743, terPct: 0.43 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21783, terPct: 0.31 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22559, terPct: 0.21 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20587, terPct: 0.20 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19915, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16901, terPct: 0.21 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15780, terPct: 0.41 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12763, terPct: 0.31 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12267, terPct: 0.80 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9663, terPct: 0.51 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9622, terPct: 0.21 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9082, terPct: 0.76 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8802, terPct: 0.41 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6325, terPct: 0.51 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3130, terPct: 0.52 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3101, terPct: 0.41 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2696, terPct: 0.87 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2367, terPct: 0.71 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2051, terPct: 0.61 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1930, terPct: 0.31 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1912, terPct: 0.76 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1407, terPct: 0.71 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1153, terPct: 0.80 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1057, terPct: 0.46 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 408, terPct: 0.80 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 379, terPct: 0.41 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 376, terPct: 0.31 },
  // NEW fund, not previously tracked. TER is an estimate pending confirmation — please verify against the fund's KIID/prospectus.
  { fundId: 'SPPSAC', name: 'Storebrand Sverige All Cap', aumMillSek: 385, terPct: 0.30 }, // estimated TER
];

export default fundRevenueSe.map((fund) => ({
  ...fund,
  estRevenueMillSek: (fund.aumMillSek * fund.terPct) / 100,
}));
