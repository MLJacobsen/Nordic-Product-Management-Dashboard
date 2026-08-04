/**
 * VFF (Verdipapirfondenes Forening) monthly inflow data for SAM.
 * Source: https://vff.no - "Totalmarkedet per selskap" monthly Excel reports
 * Update this data monthly when VFF publishes new figures (typically 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */

const vffData = {
  month: 'June 2026',
  dataMonth: 6, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: 'Net subscription in June was positive for Storebrand AM (+1.0 mrd). Total market net subscription was 24.2 mrd NOK. AUM reached 509 mrd NOK (15.9% market share).',

  totalSAM: {
    netSubscription: 1.0, // mrd. kr. (1,048 mill. from VFF Excel)
    netSubscriptionVffTotal: 24.2, // mrd. kr.
    netSubscriptionShare: 4.3, // %
    aum: 509, // mrd. kr.
    aumVffTotal: 3192, // mrd. kr.
    aumShare: 15.9, // %
  },

  privateSAM: {
    netSubscription: 0.3, // mrd. kr. (300 mill. from VFF personkunder Excel)
    netSubscriptionVffTotal: 5.1, // mrd. kr.
    netSubscriptionShare: 5.8, // %
    aum: 86, // mrd. kr.
    aumVffTotal: 908, // mrd. kr.
    aumShare: 9.4, // %
  },

  // Monthly net subscription history (mrd. kr.) for chart
  monthlyHistory: [
    { month: 'Jan 2026', sam: 2.1, vffTotal: 45.2 },
    { month: 'Feb 2026', sam: 0.8, vffTotal: 31.8 },
    { month: 'Mar 2026', sam: 1.5, vffTotal: 38.6 },
    { month: 'Apr 2026', sam: 0.9, vffTotal: 32.5 },
    { month: 'May 2026', sam: 1.4, vffTotal: 36.8 },
    { month: 'Jun 2026', sam: 1.0, vffTotal: 24.2 },
  ],
};

export default vffData;
