/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV values use share class A (or main class) for each fund.
 */
export const noNavDataDate = '2026-08-25';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1325.03, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 884.31, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2353.71, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 965.86, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 613.01, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1910.14, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1077.51, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 944.80, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7519.71, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3789.13, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1501.95, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7519.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2870.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2347.61, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 107.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3511.66, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 10608.99, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-fi', name: 'Storebrand Global Obligasjon', nav: 787.50, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1117.55, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Obligasjon 1-3', nav: 972.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 106.97, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1044.26, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1599.62, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2047.87, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9282.54, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2580.47, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7437.30, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 55878.05, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 42492.03, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 279.10, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3677.32, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1671.76, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 263.68, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6327.53, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
];

export default mockFunds;
