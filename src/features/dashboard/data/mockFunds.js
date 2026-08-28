/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV values are A-class share unless otherwise noted.
 */
export const noNavDataDate = '2026-08-28';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1387.08, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 1016.35, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2715.40, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 1691.82, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 714.18, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 2210.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1146.94, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1010.52, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7784.80, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3847.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1528.74, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7784.80, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2955.46, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2419.56, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 107.40, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3651.66, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 788.44, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1798.36, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 973.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1084.08, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1700.27, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2215.17, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 10795.96, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 3017.37, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 8210.21, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 65099.29, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 49421.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 329.48, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 6251.86, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 2953.74, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 323.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 10848.06, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
];

export default mockFunds;
