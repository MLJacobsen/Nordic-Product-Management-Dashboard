/**
 * FBF (Fondbolagens Förening) monthly statistics for Storebrand in Sweden.
 * Source: https://fondbolagen.se/ — Nysparande och förmögenhet 2026
 * Update monthly with latest figures (typically available 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */
const fbfData = {
  period: 'June 2026',
  dataMonth: 6, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: `Net savings in June were positive for Storebrand in Sweden.

Total Storebrand Sweden

Net savings for Storebrand ended at SEK 1.8 bn (2.2% of FBF total net savings of SEK 16.4 bn, estimated)

AUM for Storebrand is SEK 218 bn (2.2% of FBF total AUM of SEK 10,016 bn, estimated — AUM from Snowflake 561 mrd SEK includes institutional)

Private Clients

Net savings for private clients at Storebrand ended at SEK 450 mn (estimated, 2.3% of FBF private net savings)

AUM for private clients at Storebrand is SEK 58 bn (estimated, 2.9% of FBF private AUM)`,

  monthlyHistory: [
    { month: 'Jan', netFlow: 0.8, marketShare: 1.5 },
    { month: 'Feb', netFlow: 1.1, marketShare: 1.7 },
    { month: 'Mar', netFlow: 0.6, marketShare: 1.2 },
    { month: 'Apr', netFlow: 1.2, marketShare: 1.8 },
    { month: 'May', netFlow: 1.5, marketShare: 2.1 },
    { month: 'Jun', netFlow: 1.8, marketShare: 2.2 },
  ],

  totals: {
    aum: 218,
    aumUnit: 'mdr SEK',
    marketShareAum: 2.2,
    netFlow: 1.8,
    netFlowUnit: 'mdr SEK',
    marketShareFlow: 2.2,
  },
};

export default fbfData;
