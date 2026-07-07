/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV date: 2026-07-07
 */
export const noNavDataDate = '2026-07-07';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1282.67, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 944.12, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2578.05, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 913.09, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 675.41, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 2030.47, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1132.71, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1101.75, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7990.71, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3569.08, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1545.37, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7990.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 3025.51, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2361.78, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 110.51, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3826.92, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 12978.49, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 11939.19, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1781.1, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1151.16, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 969.85, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1082.08, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1709.65, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2241.25, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 11109.36, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2955.3, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 8277.58, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 66266.99, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 47026.96, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 328.09, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 6154.93, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 2995.7, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 346.3, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 10823.02, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
];

export default mockFunds;
