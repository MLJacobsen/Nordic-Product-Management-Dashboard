/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: https://www.storebrandam.com/no-NO/produkter/fond?sort=name&sortDir=asc
 * NAV source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV joined with DIM_FUND.
 * Partial refresh: 29 of 34 NAVs updated; five unmatched funds retain previous values and dates.
 */
export const noNavDataDate = '2026-11-26';
export const valuationDate = '2026-11-26';
export const lastUpdated = '2026-11-26T10:04:32';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1282.36, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 850.79, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2294.73, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 935.82, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 578.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1876.02, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1128.19, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1499.59, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3674.54, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1444.11, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7308.34, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 7739.53, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2602.25, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 103.80, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3181.09, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 987.63, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1125.91, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1047.62, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3356.07, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 3586.52, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 8513.20, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2253.29, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7172.92, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 52022.48, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 41696.14, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 256.87, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3968.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1575.44, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 257.75, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6355.87, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
];

export default mockFunds;
