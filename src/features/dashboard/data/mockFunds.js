/**
 * Fund data representing Storebrand Asset Management's NO-domiciled fund portfolio.
 * Source: DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV (Snowflake)
 * Valuation date: 2026-08-18
 * Last updated: 2026-08-18T10:05:00
 */
export const noNavDataDate = '2026-08-18';

const mockFunds = [
  { id: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', nav: 1318.47, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 877.79, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', nav: 2360.66, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-norge-inst', name: 'Storebrand Norge I', nav: 1662.69, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-vekst', name: 'Storebrand Vekst', nav: 617.26, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-verdi', name: 'Storebrand Verdi', nav: 1885.73, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-equal-opp', name: 'Storebrand Like Muligheter', nav: 1090.06, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-fornybar', name: 'Storebrand Fornybar Energi', nav: 993.63, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-all', name: 'Storebrand Indeks - Alle Markeder', nav: 7694.99, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norge', name: 'Storebrand Indeks - Norge', nav: 3774.92, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', nav: 1507.65, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', nav: 7694.99, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 2944.30, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', nav: 2376.32, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-europe-indeks', name: 'Storebrand Europe Index', nav: 108.71, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks - Nye Markeder', nav: 3522.41, currency: 'NOK', kiid: true, category: 'Indeks', monthlyReportMonth: '2026-07' },
  { id: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', nav: 1116.17, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-obl-13', name: 'Storebrand Global Obligasjon 1-3', nav: 972.35, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-global-obl', name: 'Storebrand Global Obligasjon', nav: 788.47, currency: 'NOK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', nav: 1047.37, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 1618.61, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', nav: 2088.87, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global', name: 'Delphi Global', nav: 9526.01, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-global-vs', name: 'Delphi Global Valutasikret', nav: 2612.05, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', nav: 7450.01, currency: 'NOK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-07' },
  { id: 'delphi-nordic', name: 'Delphi Nordic', nav: 56074.92, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'delphi-norge', name: 'Delphi Norge', nav: 42839.52, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-focus', name: 'SKAGEN Focus', nav: 282.59, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-global', name: 'SKAGEN Global', nav: 3687.35, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 1667.92, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-m2', name: 'SKAGEN m2', nav: 268.47, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
  { id: 'skagen-vekst', name: 'SKAGEN Vekst', nav: 6352.75, currency: 'NOK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-07' },
];

export default mockFunds;
