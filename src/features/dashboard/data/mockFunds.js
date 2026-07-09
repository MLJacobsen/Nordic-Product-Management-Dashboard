/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV valuation date: 2026-07-09
 */
export const noNavDataDate = '2026-07-09';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1230.34, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 832.00, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2268.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 895.27, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 582.69, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1770.51, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1068.61, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1015.66, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3523.00, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1517.51, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7712.58, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2941.96, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2295.84, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 109.56, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3614.24, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 987.63, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1107.00, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1042.94, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1609.27, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2072.83, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9536.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2525.07, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7457.45, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 56357.61, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 40521.17, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 276.83, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3649.67, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1685.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 282.13, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6353.12, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
];

export default mockFunds;
