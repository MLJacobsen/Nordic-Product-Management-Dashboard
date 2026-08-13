/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV date: 2026-08-12
 */
export const noNavDataDate = '2026-08-12';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1364.97, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 983.29, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2646.95, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 971.00, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 699.37, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 2156.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1137.34, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1884.50, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7880.77, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3796.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1520.93, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7880.77, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 8148.03, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2806.15, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 109.15, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3615.30, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 13866.37, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 11877.02, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1792.45, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1153.52, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 1251.14, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1084.34, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3708.54, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 4177.05, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 10909.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 3007.55, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 8178.06, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 64743.34, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 48984.32, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 329.94, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 6250.37, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 2976.10, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 329.47, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 10826.13, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
];

export default mockFunds;
