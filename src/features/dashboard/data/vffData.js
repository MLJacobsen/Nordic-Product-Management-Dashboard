/**
 * VFF (Verdipapirfondenes Forening) monthly inflow data for SAM.
 * Source: https://vff.no - "Totalmarkedet per selskap" monthly Excel reports
 * Update this data monthly when VFF publishes new figures.
 */

const vffData = {
  month: 'April 2026',
  summary: 'Nettotegningen i april var positiv for Storebrand-, Delphi-, Kron- og SKAGEN Fondene.',

  totalSAM: {
    netSubscription: 0.9, // mrd. kr.
    netSubscriptionVffTotal: 32.5, // mrd. kr.
    netSubscriptionShare: 2.9, // %
    aum: 461, // mrd. kr.
    aumVffTotal: 2960, // mrd. kr.
    aumShare: 15.6, // %
  },

  privateSAM: {
    netSubscription: 0.484, // mrd. kr. (484 mill.)
    netSubscriptionVffTotal: 9.9, // mrd. kr.
    netSubscriptionShare: 4.9, // %
    aum: 81, // mrd. kr.
    aumVffTotal: 842, // mrd. kr.
    aumShare: 9.7, // %
  },

  // Monthly net subscription history (mrd. kr.) for chart
  monthlyHistory: [
    { month: 'Nov 2025', sam: 1.2, vffTotal: 28.1 },
    { month: 'Des 2025', sam: -0.3, vffTotal: 15.4 },
    { month: 'Jan 2026', sam: 2.1, vffTotal: 45.2 },
    { month: 'Feb 2026', sam: 0.8, vffTotal: 31.8 },
    { month: 'Mar 2026', sam: 1.5, vffTotal: 38.6 },
    { month: 'Apr 2026', sam: 0.9, vffTotal: 32.5 },
  ],
};

export default vffData;
