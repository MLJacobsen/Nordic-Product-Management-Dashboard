/**
 * FBF (Fondbolagens Förening) monthly statistics for Storebrand in Sweden.
 * Source: https://fondbolagen.se/ — Nysparande och förmögenhet 2026
 * Update monthly with latest figures.
 */
const fbfData = {
  period: 'april 2026',
  summary: `Nettosparandet i april var positivt för Storebrand i Sverige.

Total för Storebrand Sverige

Nettosparandet i Storebrand endte på 1,2 mdr SEK (1,8 % av FBF:s nettosparande på 65,4 mdr SEK)

Förvaltningskapitalet för Storebrand är 198 mdr SEK (3,2% av FBF:s förvaltningskapital på 6.180 mdr SEK)

Privatkunder i Storebrand

Nettosparandet för privatkunder i Storebrand endte på 340 MSEK (2,1% av FBF:s nettosparande på 16,2 mdr SEK)

Förvaltningskapitalet för privatkunder i Storebrand är 52 mdr SEK (2,8% av FBF:s förvaltningskapital på 1.860 mdr SEK)`,

  monthlyHistory: [
    { month: 'Jan', netFlow: 0.8, marketShare: 1.5 },
    { month: 'Feb', netFlow: 1.1, marketShare: 1.7 },
    { month: 'Mar', netFlow: 0.6, marketShare: 1.2 },
    { month: 'Apr', netFlow: 1.2, marketShare: 1.8 },
  ],

  totals: {
    aum: 198,
    aumUnit: 'mdr SEK',
    marketShareAum: 3.2,
    netFlow: 1.2,
    netFlowUnit: 'mdr SEK',
    marketShareFlow: 1.8,
  },
};

export default fbfData;
