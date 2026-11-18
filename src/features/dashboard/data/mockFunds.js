/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Matched NAVs: Snowflake DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (NOK main share classes).
 * Partial refresh: matched funds valued 2026-11-18; five unmatched mock entries remain unchanged.
 * noNavDataDate remains the prior snapshot date until every entry can be verified.
 * Replace with real API calls via fundService.js when a structured endpoint is available.
 */
export const noNavDataDate = '2026-07-31';
export const valuationDate = noNavDataDate;
export const lastUpdated = '2026-11-18T10:08:26+01:00';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1326.95, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 879.60, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2376.67, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 967.80, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 600.76, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1931.38, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1132.36, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1585.41, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-07-31' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3806.93, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1491.99, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7430.92, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 7870.16, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2689.61, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 107.23, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3219.09, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05', valuationDate: '2026-07-31' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 987.63, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05', valuationDate: '2026-07-31' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1125.02, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05', valuationDate: '2026-07-31' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05', valuationDate: '2026-07-31' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1043.24, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3387.69, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 3668.47, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 8630.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2319.81, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7313.73, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 53872.81, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 42750.45, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 264.42, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 4010.07, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1601.68, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 260.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6514.23, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05', valuationDate: '2026-11-18' },
];

export default mockFunds;
