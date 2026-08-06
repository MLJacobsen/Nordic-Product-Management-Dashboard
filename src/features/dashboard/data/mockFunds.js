/**
 * Fund data representing Storebrand Asset Management's fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * NAV values are per-unit prices from the shareholder registry.
 */
export const noNavDataDate = '2026-08-06';

const mockFunds = [
  // Norwegian Equity Funds
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 78616.37, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 532529.56, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2095.85, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', nav: 54193.87, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 520682.43, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1226.39, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 811.81, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 2115.63, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-all', name: 'Storebrand Global All Countries', nav: 4214.66, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // Index Funds
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', nav: 2251.32, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 952.15, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 4214.66, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 4377.35, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 1520.32, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: null, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', nav: 1903.91, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },

  // Bond Funds (Rentefond)
  { id: 'stb-likviditet', name: 'Storebrand Likviditet', nav: 10669.55, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-kreditt', name: 'Storebrand Global Kreditt IG', nav: 1046.43, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1183.13, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-kort-kreditt', name: 'Storebrand Kort Kreditt IG', nav: 11086.79, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-norsk-kreditt', name: 'Storebrand Norsk Kreditt IG', nav: 1083.56, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },

  // Lifecycle Funds (Fremtid)
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 969.64, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 2425.66, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2315.46, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },

  // Delphi Funds
  { id: 'delphi-global', name: 'Delphi Global', nav: 5139.65, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 1440.50, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 6172.46, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 44753.25, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 31037.33, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },

  // SKAGEN Funds
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 257.62, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 6338.69, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 3022.33, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 317.28, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 10931.03, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
];

export default mockFunds;
