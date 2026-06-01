/**
 * New fund launches in 2026 by Storebrand Asset Management.
 * Includes simulated monthly performance data for charting.
 */
const newFunds2026 = [
  {
    id: 'stb-global-dev-markets',
    name: 'Storebrand Global Developed Markets',
    launchDate: '2026-01-29',
    nav: 108.42,
    currency: 'NOK',
    category: 'Aksje – Global',
    description: 'Fossilfritt indeksnært aksjefond med bred eksponering mot utviklede markeder.',
    url: 'https://www.storebrandam.com/no-NO/produkter/fond/storebrand-global-developed-markets/',
    performance: [
      { month: 'Jan', nav: 100.00 },
      { month: 'Feb', nav: 101.85 },
      { month: 'Mar', nav: 103.20 },
      { month: 'Apr', nav: 106.55 },
      { month: 'Mai', nav: 108.42 },
    ],
  },
  {
    id: 'stb-us-plus',
    name: 'Storebrand US Plus',
    launchDate: '2026-02-10',
    nav: 112.37,
    currency: 'NOK',
    category: 'Aksje – USA',
    description: 'Klimabevisst amerikansk aksjefond med aktiv forvaltning.',
    url: 'https://www.storebrandam.com/no-NO/produkter/fond/storebrand-us-plus/',
    performance: [
      { month: 'Feb', nav: 100.00 },
      { month: 'Mar', nav: 104.10 },
      { month: 'Apr', nav: 109.85 },
      { month: 'Mai', nav: 112.37 },
    ],
  },
  {
    id: 'stb-nordic-ig-med-dur',
    name: 'Storebrand Nordic IG Medium Duration',
    launchDate: '2026-01-15',
    nav: 101.85,
    currency: 'NOK',
    category: 'Rente – Norden',
    description: 'Investment grade obligasjonsfond med mellomlangt durasjonsmål i nordiske markeder.',
    url: 'https://www.storebrandam.com/no-NO/produkter/fond/storebrand-nordic-ig-medium-duration/',
    performance: [
      { month: 'Jan', nav: 100.00 },
      { month: 'Feb', nav: 100.52 },
      { month: 'Mar', nav: 101.10 },
      { month: 'Apr', nav: 101.48 },
      { month: 'Mai', nav: 101.85 },
    ],
  },
  {
    id: 'stb-akkumulerende-obligasjon',
    name: 'Storebrand Norsk Obligasjon Akk.',
    launchDate: '2026-01-01',
    nav: 101.92,
    currency: 'NOK',
    category: 'Rente – Norge',
    description: 'Akkumulerende rentefond – renteinntekter reinvesteres automatisk.',
    url: 'https://www.storebrandam.com/no-NO/produkter/fond/storebrand-norsk-obligasjon-akkumulerende/',
    performance: [
      { month: 'Jan', nav: 100.00 },
      { month: 'Feb', nav: 100.35 },
      { month: 'Mar', nav: 100.82 },
      { month: 'Apr', nav: 101.45 },
      { month: 'Mai', nav: 101.92 },
    ],
  },
  {
    id: 'stb-emerging-markets-2026',
    name: 'Storebrand Emerging Markets Enhanced',
    launchDate: '2026-03-03',
    nav: 105.64,
    currency: 'NOK',
    category: 'Aksje – Fremvoksende',
    description: 'Oppdatert vekstmarkedsfond med forsterket bærekraftsprofil.',
    url: 'https://www.storebrandam.com/no-NO/produkter/fond/storebrand-emerging-markets-enhanced/',
    performance: [
      { month: 'Mar', nav: 100.00 },
      { month: 'Apr', nav: 103.40 },
      { month: 'Mai', nav: 105.64 },
    ],
  },
];

export default newFunds2026;
