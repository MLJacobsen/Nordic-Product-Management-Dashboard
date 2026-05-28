/**
 * Swedish domiciled funds from Storebrand/SPP/SKAGEN.
 * Source: https://storebrand.fondlista.se/
 */
const mockFundsSE = [
  // Delphi
  { id: 'se-delphi-global', name: 'Delphi Global', nav: 2847.32, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },

  // GodFond
  { id: 'se-godfond-sv', name: 'GodFond Sverige & Världen', nav: 345.18, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },

  // SKAGEN
  { id: 'se-skagen-focus', name: 'SKAGEN Focus', nav: 187.45, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-skagen-global', name: 'SKAGEN Global', nav: 2456.78, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', nav: 112.34, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-skagen-m2', name: 'SKAGEN m2', nav: 234.89, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-skagen-vekst', name: 'SKAGEN Vekst', nav: 567.12, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },

  // SPP Generation
  { id: 'se-spp-gen-40', name: 'SPP Generation 40-tal', nav: 312.55, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-gen-50', name: 'SPP Generation 50-tal', nav: 398.71, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-gen-60', name: 'SPP Generation 60-tal', nav: 445.20, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-gen-70', name: 'SPP Generation 70-tal', nav: 521.83, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-gen-80', name: 'SPP Generation 80-tal', nav: 612.09, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },

  // SPP Mix
  { id: 'se-spp-mix-100', name: 'SPP Mix 100', nav: 489.34, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-mix-20', name: 'SPP Mix 20', nav: 178.22, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-mix-50', name: 'SPP Mix 50', nav: 298.45, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-spp-mix-80', name: 'SPP Mix 80', nav: 401.67, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },

  // Storebrand Equity
  { id: 'se-stb-em', name: 'Storebrand Emerging Markets', nav: 567.93, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-em-plus', name: 'Storebrand Emerging Markets Plus', nav: 589.41, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-equal-opp', name: 'Storebrand Equal Opportunities', nav: 156.72, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-europa', name: 'Storebrand Europa', nav: 1345.72, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-europa-plus', name: 'Storebrand Europa Plus', nav: 1298.55, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-all', name: 'Storebrand Global All Countries', nav: 234.56, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-dev', name: 'Storebrand Global Developed Markets', nav: 108.42, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-hdlv', name: 'Storebrand Global High Div Low Vol', nav: 267.88, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-mf', name: 'Storebrand Global Multifactor', nav: 312.45, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-plus', name: 'Storebrand Global Plus', nav: 498.21, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-global-sol', name: 'Storebrand Global Solutions', nav: 189.34, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-japan', name: 'Storebrand Japan', nav: 423.67, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-mix-120', name: 'Storebrand Mix 120', nav: 134.55, currency: 'SEK', kiid: true, category: 'Kombinasjon', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-renewable', name: 'Storebrand Renewable Energy', nav: 89.34, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-smart-cities', name: 'Storebrand Smart Cities', nav: 145.67, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-sverige', name: 'Storebrand Sverige', nav: 892.33, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-sverige-allcap', name: 'Storebrand Sverige All Cap', nav: 112.88, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-sverige-plus', name: 'Storebrand Sverige Plus', nav: 934.21, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-sverige-sma', name: 'Storebrand Sverige Småbolag Plus', nav: 678.45, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-usa', name: 'Storebrand USA', nav: 1523.18, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-usa-plus', name: 'Storebrand USA Plus', nav: 1489.67, currency: 'SEK', kiid: true, category: 'Aksje', monthlyReportMonth: '2026-04' },

  // Storebrand Fixed Income
  { id: 'se-stb-frn', name: 'Storebrand FRN Företagsobligation', nav: 1028.15, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 1015.42, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 998.87, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-gron-obl', name: 'Storebrand Grön Obligation', nav: 1045.89, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-hy', name: 'Storebrand High Yield Företagsobligation', nav: 1102.44, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-kortranta', name: 'Storebrand Kortränta', nav: 102.33, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
  { id: 'se-stb-obligation', name: 'Storebrand Obligation', nav: 987.63, currency: 'SEK', kiid: true, category: 'Rente', monthlyReportMonth: '2026-04' },
];

export default mockFundsSE;
