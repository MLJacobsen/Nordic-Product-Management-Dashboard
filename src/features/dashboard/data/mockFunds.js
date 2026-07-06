/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV date: 2026-07-06
 */
export const noNavDataDate = '2026-07-06';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1220.59, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 829.71, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2285.36, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 887.70, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 591.97, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1750.07, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1065.62, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1041.99, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7730.40, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3494.54, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1527.98, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7730.40, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2946.82, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2289.21, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 110.56, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3616.87, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1000.70, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-fi', name: 'Storebrand Global Obligasjon', nav: 793.77, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1105.73, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Obligasjon 1-3', nav: 969.37, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Kreditt IG', nav: 1039.39, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1043.52, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1612.22, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2079.99, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9620.62, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2537.54, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7515.52, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 57153.44, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 40500.55, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 274.62, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3628.77, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1670.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 282.97, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6316.76, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
];

export default mockFunds;
