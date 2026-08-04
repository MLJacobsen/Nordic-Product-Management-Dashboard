/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: Snowflake DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (share class A/B)
 * Replace with real API calls via fundService.js when a structured endpoint is available.
 */
export const noNavDataDate = '2026-08-04';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1275.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 844.79, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2287.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 1607.76, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 580.11, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1848.77, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1045.73, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 941.17, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7470.69, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3652.67, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1483.43, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7470.69, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2854.01, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2295.25, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 106.89, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3468.66, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-05' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1263.41, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-fi', name: 'Storebrand Global Fixed Income', nav: 974.83, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1112.01, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 969.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 786.13, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-05' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1039.02, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1586.75, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2023.83, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9118.83, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2487.05, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7314.83, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-05' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 54505.48, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 41145.41, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 272.02, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3657.04, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1707.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 271.82, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6340.64, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-05' },
];

export default mockFunds;
