/**
 * FBF (Fondbolagens Förening) monthly statistics for Storebrand in Sweden.
 * Source: https://fondbolagen.se/ — Nysparande och förmögenhet 2026
 * Update monthly with latest figures (typically available 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */
const fbfData = {
  period: 'maj 2026',
  dataMonth: 5, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: `Nettosparandet i maj var positivt för Storebrand i Sverige.

Total för Storebrand Sverige

Nettosparandet i Storebrand endte på 1,5 mdr SEK (2,1 % av FBF:s nettosparande på 71,2 mdr SEK)

Förvaltningskapitalet för Storebrand är 205 mdr SEK (3,3% av FBF:s förvaltningskapital på 6.310 mdr SEK)

Privatkunder i Storebrand

Nettosparandet för privatkunder i Storebrand endte på 410 MSEK (2,3% av FBF:s nettosparande på 17,8 mdr SEK)

Förvaltningskapitalet för privatkunder i Storebrand är 55 mdr SEK (2,9% av FBF:s förvaltningskapital på 1.920 mdr SEK)`,

  monthlyHistory: [
    { month: 'Jan', netFlow: 0.8, marketShare: 1.5 },
    { month: 'Feb', netFlow: 1.1, marketShare: 1.7 },
    { month: 'Mar', netFlow: 0.6, marketShare: 1.2 },
    { month: 'Apr', netFlow: 1.2, marketShare: 1.8 },
    { month: 'Maj', netFlow: 1.5, marketShare: 2.1 },
  ],

  totals: {
    aum: 205,
    aumUnit: 'mdr SEK',
    marketShareAum: 3.3,
    netFlow: 1.5,
    netFlowUnit: 'mdr SEK',
    marketShareFlow: 2.1,
  },
};

export default fbfData;
