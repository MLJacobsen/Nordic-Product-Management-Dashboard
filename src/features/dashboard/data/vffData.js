/**
 * VFF (Verdipapirfondenes Forening) monthly inflow data for SAM.
 * Source: https://vff.no - "Totalmarkedet per selskap" monthly Excel reports
 * Update this data monthly when VFF publishes new figures (typically 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */

const vffData = {
  month: 'May 2026',
  dataMonth: 5, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: 'Net subscription in May was positive for Storebrand, Delphi, Kron and SKAGEN Funds.',

  totalSAM: {
    netSubscription: 1.4, // mrd. kr.
    netSubscriptionVffTotal: 36.8, // mrd. kr.
    netSubscriptionShare: 3.8, // %
    aum: 472, // mrd. kr.
    aumVffTotal: 3020, // mrd. kr.
    aumShare: 15.6, // %
  },

  privateSAM: {
    netSubscription: 0.562, // mrd. kr. (562 mill.)
    netSubscriptionVffTotal: 11.2, // mrd. kr.
    netSubscriptionShare: 5.0, // %
    aum: 84, // mrd. kr.
    aumVffTotal: 868, // mrd. kr.
    aumShare: 9.7, // %
  },

  // Monthly net subscription history (mrd. kr.) for chart
  monthlyHistory: [
    { month: 'Dec 2025', sam: -0.3, vffTotal: 15.4 },
    { month: 'Jan 2026', sam: 2.1, vffTotal: 45.2 },
    { month: 'Feb 2026', sam: 0.8, vffTotal: 31.8 },
    { month: 'Mar 2026', sam: 1.5, vffTotal: 38.6 },
    { month: 'Apr 2026', sam: 0.9, vffTotal: 32.5 },
    { month: 'May 2026', sam: 1.4, vffTotal: 36.8 },
  ],
};

export default vffData;
