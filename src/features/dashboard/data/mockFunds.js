/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (NAV date: 2026-07-08)
 * Replace with real API calls via fundService.js when a structured endpoint is available.
 */
export const noNavDataDate = '2026-07-08';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1225.45, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 831.01, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2269.19, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 891.60, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 585.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1760.67, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 1078.87, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 1879.93, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 7792.92, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 3508.87, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1529.29, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7792.92, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 8144.64, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2711.83, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 110.44, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 3699.53, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-06' },

  // Bond Funds (Rentefond)
  { id: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', nav: 1028.15, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-fi', name: 'Storebrand Global Obligasjon', nav: 9764.28, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1106.77, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-13', name: 'Storebrand Global Obligasjon 1-3', nav: 970.25, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },
  { id: 'stb-global-corp-46', name: 'Storebrand Global Kreditt IG', nav: 1022.47, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-06' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1045.27, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 3475.36, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 3864.75, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 9684.46, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2556.05, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7545.80, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-06' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 57461.23, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 40777.85, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 280.15, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3629.30, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1701.63, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 281.76, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6356.08, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-06' },
];

export default mockFunds;
