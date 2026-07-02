/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: Snowflake DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (NO-domiciled, NOK)
 * Valuation date: 2026-07-02
 */
export const noNavDataDate = '2026-07-02';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1207.32, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 820.73, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2265.19, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 612.37, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 586.28, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1734.44, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1042.59, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1060.79, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3451.79, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1516.67, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7789.06, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2962.78, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2289.88, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 110.07, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3719.32, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 795.93, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1105.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1045.45, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1621.56, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2098.94, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9834.92, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2584.57, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7521.91, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 57184.70, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 40021.62, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 272.79, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3519.68, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1676.27, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 279.48, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6225.42, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
];

export default mockFunds;
