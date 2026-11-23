/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * NAV source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV, main NOK share classes.
 * Five unmatched legacy entries retain their original NAV and 2026-07-31 valuation date:
 * stb-global-all, stb-frn-finans, stb-global-fi, stb-global-corp-13, stb-global-corp-46.
 * Other attributes remain from https://www.storebrandam.com/no-NO/produkter/fond.
 */
export const noNavDataDate = '2026-11-23';
export const valuationDate = noNavDataDate;
export const lastUpdated = '2026-11-23T08:42:02+01:00';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1304.91, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 864.04, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2335.83, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 951.77, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 593.24, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1899.13, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1119.58, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1546.73, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3745.17, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1455.91, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7269.17, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 7697.91, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2605.47, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 104.02, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3160.29, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 987.63, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1125.03, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, valuationDate: '2026-07-31', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1044.27, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3347.33, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 3585.54, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 8477.11, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2257.38, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7218.98, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 52678.46, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 42486.63, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 258.90, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3899.51, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1576.45, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 256.83, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6372.21, valuationDate: '2026-11-23', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
];

export default mockFunds;
