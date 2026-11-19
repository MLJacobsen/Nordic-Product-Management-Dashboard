/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: Snowflake DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV, main NOK share classes.
 * Partial refresh: 29 matched NO funds valued 2026-11-19.
 * Five unmatched entries retain unverified legacy values and a null valuationDate.
 * Keep the overall data date unchanged until all entries can be reconciled.
 * Replace with real API calls via fundService.js when a structured endpoint is available.
 */
export const noNavDataDate = '2026-07-31';
export const valuationDate = '2026-11-19';
export const lastUpdated = '2026-11-19T10:04:47+01:00';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1322.21, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 874.32, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2354.98, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 964.96, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 598.11, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1925.45, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1110.26, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1538.66, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, valuationDate: null, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3794.03, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1463.89, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7320.61, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 7754.97, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2657.55, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 104.90, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3166.62, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, valuationDate: null, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 987.63, valuationDate: null, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1124.94, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, valuationDate: null, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, valuationDate: null, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1043.33, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3361.18, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 3617.40, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 8520.46, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2296.73, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7245.95, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 53046.77, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 42714.05, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 260.68, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3910.16, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1581.64, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 257.16, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6424.22, valuationDate: '2026-11-19', currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
];

export default mockFunds;
