/**
 * FBF (Fondbolagens Förening) monthly statistics for Storebrand in Sweden.
 * Source: https://fondbolagen.se/ — Nysparande och förmögenhet 2026
 * Update monthly with latest figures (typically available 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */
const fbfData = {
  period: 'July 2026',
  dataMonth: 7, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: `Net savings in July were positive for the Swedish fund market with 28.3 mdr SEK in net inflows.

Total Storebrand Sweden

Net savings for Storebrand ended at SEK 1.4 bn (estimated, ~5% of FBF total net savings of SEK 28.3 bn)

AUM for Storebrand is SEK 213 bn (2.1% of FBF total AUM of SEK 9,954 bn — market AUM declined slightly from June record of 10,016 bn)

Private Clients

Net savings for private clients at Storebrand ended at SEK 350 mn (estimated)

AUM for private clients at Storebrand is SEK 57 bn (estimated)`,

  monthlyHistory: [
    { month: 'Jan', netFlow: 0.8, marketShare: 1.5 },
    { month: 'Feb', netFlow: 1.1, marketShare: 1.7 },
    { month: 'Mar', netFlow: 0.6, marketShare: 1.2 },
    { month: 'Apr', netFlow: 1.2, marketShare: 1.8 },
    { month: 'May', netFlow: 1.5, marketShare: 2.1 },
    { month: 'Jun', netFlow: 1.8, marketShare: 2.2 },
    { month: 'Jul', netFlow: 1.4, marketShare: 5.0 },
  ],

  totals: {
    aum: 213,
    aumUnit: 'mdr SEK',
    marketShareAum: 2.1,
    netFlow: 1.4,
    netFlowUnit: 'mdr SEK',
    marketShareFlow: 5.0,
  },
};

export default fbfData;
