/**
 * STOREBRAND SICAV monthly and YTD flow data.
 * Source: Internal reporting (settled transactions only, EUR).
 * Update during the first 5 days of each month when previous month flows are ready.
 *
 * dataMonth: 1-12, the month the flows cover.
 */
const luxFlowData = {
  dataMonth: 5,
  dataYear: 2026,
  period: 'Mai 2026',
  ytdPeriod: 'Jan–Mai 2026',
  note: 'Settled transactions only. YTD excludes Storebrand Livsforsikring AS proprietary flows (Skagen Kon-Tiki retained).',

  monthly: {
    totalInflows: 24259379.27,
    totalOutflows: 7763047.49,
    totalNetFlow: 16496331.78,
    funds: [
      { name: 'Storebrand Global Plus', inflows: 3352515.48, outflows: 1538624.50, netFlow: 1813890.98 },
      { name: 'Storebrand EM Plus', inflows: 16488467.19, outflows: 518875.83, netFlow: 15969591.36 },
      { name: 'Storebrand US Plus', inflows: 4100111.09, outflows: 2985816.52, netFlow: 1114294.57 },
      { name: 'Storebrand Global Solutions', inflows: 30319.82, outflows: 0, netFlow: 30319.82 },
      { name: 'Skagen Kon-Tiki', inflows: 213268.74, outflows: 2216971.81, netFlow: -2003703.07 },
      { name: 'Skagen Global', inflows: 74504.42, outflows: 502758.83, netFlow: -428254.41 },
      { name: 'Skagen Focus', inflows: 192.53, outflows: 0, netFlow: 192.53 },
    ],
  },

  ytd: {
    totalInflows: 260087460.99,
    totalOutflows: 30485143.92,
    totalNetFlow: 229602317.07,
    funds: [
      { name: 'Storebrand Global Plus', inflows: 13554114.48, outflows: 10708847.75, netFlow: 2845266.73 },
      { name: 'Storebrand EM Plus', inflows: 51748851.04, outflows: 3905923.42, netFlow: 47842927.62 },
      { name: 'Storebrand US Plus', inflows: 184051486.45, outflows: 4195805.22, netFlow: 179855681.23 },
      { name: 'Storebrand Global Solutions', inflows: 152692.29, outflows: 55840.95, netFlow: 96851.34 },
      { name: 'Skagen Kon-Tiki', inflows: 10319910.95, outflows: 10784833.33, netFlow: -464922.38 },
      { name: 'Skagen Global', inflows: 195066.24, outflows: 822178.42, netFlow: -627112.18 },
      { name: 'Skagen Focus', inflows: 65339.54, outflows: 11714.83, netFlow: 53624.71 },
    ],
  },
};

export default luxFlowData;
