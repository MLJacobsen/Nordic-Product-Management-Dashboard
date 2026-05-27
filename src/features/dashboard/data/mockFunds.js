/**
 * Mock fund data representing Storebrand's fund portfolio.
 * Replace with real API calls via fundService.js when available.
 */
const mockFunds = [
  { id: 'stb-global', name: 'Storebrand Global Solutions', nav: 2847.32, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-norge', name: 'Storebrand Norge', nav: 1523.18, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-norden', name: 'Storebrand Norden', nav: 1891.45, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-fremtid-30', name: 'Storebrand Fremtid 30', nav: 312.67, currency: 'NOK', kiid: true, category: 'Balanced' },
  { id: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', nav: 498.21, currency: 'NOK', kiid: true, category: 'Balanced' },
  { id: 'stb-fremtid-80', name: 'Storebrand Fremtid 80', nav: 721.09, currency: 'NOK', kiid: false, category: 'Balanced' },
  { id: 'stb-global-indeks', name: 'Storebrand Global Indeks', nav: 4215.88, currency: 'NOK', kiid: true, category: 'Index' },
  { id: 'stb-usa-indeks', name: 'Storebrand USA Indeks', nav: 5102.44, currency: 'NOK', kiid: true, category: 'Index' },
  { id: 'stb-europa-indeks', name: 'Storebrand Europa Indeks', nav: 1345.72, currency: 'NOK', kiid: true, category: 'Index' },
  { id: 'stb-emerging', name: 'Storebrand Emerging Markets', nav: 892.36, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-rente', name: 'Storebrand Norsk Kreditt', nav: 1102.15, currency: 'NOK', kiid: true, category: 'Fixed Income' },
  { id: 'stb-global-rente', name: 'Storebrand Global Credit', nav: 987.63, currency: 'NOK', kiid: true, category: 'Fixed Income' },
  { id: 'stb-likviditet', name: 'Storebrand Likviditet', nav: 1015.42, currency: 'NOK', kiid: true, category: 'Money Market' },
  { id: 'stb-delphi-norge', name: 'Delphi Norge', nav: 3456.91, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-delphi-nordic', name: 'Delphi Nordic', nav: 2134.58, currency: 'NOK', kiid: false, category: 'Equity' },
  { id: 'stb-trippel', name: 'Storebrand Trippel Smart', nav: 1678.24, currency: 'NOK', kiid: true, category: 'Factor' },
  { id: 'stb-global-esg', name: 'Storebrand Global ESG Plus', nav: 2901.77, currency: 'NOK', kiid: true, category: 'Equity' },
  { id: 'stb-short-duration', name: 'Storebrand Short Duration', nav: 1028.91, currency: 'NOK', kiid: true, category: 'Fixed Income' },
];

export default mockFunds;
