/**
 * Revenue estimation for NO-domiciled funds.
 * Revenue = AUM (MNOK) × Management Fee (TER) per year.
 * TER sourced from fund prospectuses / KIID documents.
 * AUM from Snowflake (mock data until live integration).
 *
 * Note: This is estimated annual revenue from management fees only.
 * Actual revenue may differ due to performance fees, transaction fees, etc.
 */
const fundRevenue = [
  // Norwegian Equity Funds
  { fundId: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', aumMillNok: 8432, terPct: 1.20 },
  { fundId: 'stb-norge', name: 'Storebrand Norge', aumMillNok: 12845, terPct: 1.50 },
  { fundId: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', aumMillNok: 3214, terPct: 1.00 },
  { fundId: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', aumMillNok: 15672, terPct: 0.75 },
  { fundId: 'stb-vekst', name: 'Storebrand Vekst', aumMillNok: 6891, terPct: 1.50 },
  { fundId: 'stb-verdi', name: 'Storebrand Verdi', aumMillNok: 9456, terPct: 1.20 },
  { fundId: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', aumMillNok: 2134, terPct: 1.50 },
  { fundId: 'stb-fornybar', name: 'Storebrand Fornybar Energi', aumMillNok: 4567, terPct: 1.50 },
  { fundId: 'stb-global-all', name: 'Storebrand Global All Countries', aumMillNok: 18923, terPct: 0.30 },

  // Index Funds
  { fundId: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', aumMillNok: 42156, terPct: 0.20 },
  { fundId: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', aumMillNok: 28934, terPct: 0.22 },
  { fundId: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 67821, terPct: 0.20 },
  { fundId: 'stb-global-indeks', name: 'Storebrand Global Indeks', aumMillNok: 89234, terPct: 0.20 },
  { fundId: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 34521, terPct: 0.22 },
  { fundId: 'stb-europe-indeks', name: 'Storebrand Europe Index', aumMillNok: 12345, terPct: 0.20 },
  { fundId: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', aumMillNok: 8976, terPct: 0.35 },

  // Bond Funds
  { fundId: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', aumMillNok: 5678, terPct: 0.40 },
  { fundId: 'stb-global-fi', name: 'Storebrand Global Fixed Income', aumMillNok: 7234, terPct: 0.50 },
  { fundId: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', aumMillNok: 11245, terPct: 0.80 },
  { fundId: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillNok: 6789, terPct: 0.40 },
  { fundId: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillNok: 4532, terPct: 0.45 },

  // Lifecycle Funds
  { fundId: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', aumMillNok: 3456, terPct: 0.60 },
  { fundId: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', aumMillNok: 8912, terPct: 0.70 },
  { fundId: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', aumMillNok: 14567, terPct: 0.80 },

  // Delphi Funds
  { fundId: 'delphi-global', name: 'Delphi Global', aumMillNok: 21345, terPct: 1.50 },
  { fundId: 'delphi-global-vs', name: 'Delphi Global Valutasikret', aumMillNok: 9876, terPct: 1.50 },
  { fundId: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', aumMillNok: 5432, terPct: 1.20 },
  { fundId: 'delphi-nordic', name: 'Delphi Nordic', aumMillNok: 7654, terPct: 1.50 },
  { fundId: 'delphi-norge', name: 'Delphi Norge', aumMillNok: 18234, terPct: 1.50 },

  // SKAGEN Funds
  { fundId: 'skagen-focus', name: 'SKAGEN Focus', aumMillNok: 6543, terPct: 1.50 },
  { fundId: 'skagen-global', name: 'SKAGEN Global', aumMillNok: 45678, terPct: 1.00 },
  { fundId: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', aumMillNok: 12345, terPct: 2.00 },
  { fundId: 'skagen-m2', name: 'SKAGEN m2', aumMillNok: 8765, terPct: 1.50 },
  { fundId: 'skagen-vekst', name: 'SKAGEN Vekst', aumMillNok: 4321, terPct: 1.50 },
];

// Calculate estimated annual revenue per fund
const fundRevenueWithCalc = fundRevenue.map((f) => ({
  ...f,
  estRevenueMillNok: (f.aumMillNok * f.terPct) / 100,
}));

export default fundRevenueWithCalc;
