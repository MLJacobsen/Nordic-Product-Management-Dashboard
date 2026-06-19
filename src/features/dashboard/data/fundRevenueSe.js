/**
 * Revenue estimation for SE-domiciled funds.
 * Revenue = AUM (MSEK) × Ongoing Charge per year.
 * Ongoing charges from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND.
 * AUM from Snowflake DDS_SAM.HOLDINGS.AUM_FUND (as of 2026-06-17, SEK).
 *
 * Note: Estimated annual revenue from ongoing charges only.
 */
const fundRevenueSe = [
  // SPP Generation (Lifecycle)
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53532, terPct: 0.41 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 37326, terPct: 0.41 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16054, terPct: 0.41 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8285, terPct: 0.41 },

  // SPP Mix
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11778, terPct: 0.80 },

  // Storebrand Equity (SE domicile)
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 55912, terPct: 0.31 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 53589, terPct: 0.31 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 51259, terPct: 0.52 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 37539, terPct: 0.52 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35102, terPct: 0.21 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 27213, terPct: 0.43 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21557, terPct: 0.46 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20047, terPct: 0.21 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9031, terPct: 0.31 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions (SE)', aumMillSek: 8593, terPct: 0.52 },

  // Storebrand Fixed Income (SE domicile)
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22568, terPct: 0.21 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19377, terPct: 0.41 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16861, terPct: 0.31 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12641, terPct: 0.31 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8793, terPct: 0.71 },
];

// Calculate estimated annual revenue per fund
const fundRevenueSeWithCalc = fundRevenueSe.map((f) => ({
  ...f,
  estRevenueMillSek: (f.aumMillSek * f.terPct) / 100,
}));

export default fundRevenueSeWithCalc;
