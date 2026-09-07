/**
 * VFF (Verdipapirfondenes Forening) monthly inflow data for SAM.
 * Source: https://vff.no - "Totalmarkedet per selskap" monthly Excel reports
 * Update this data monthly when VFF publishes new figures (typically 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */

const vffData = {
  month: 'July 2026',
  dataMonth: 7, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: 'Net subscription in July was positive for Storebrand AM (+2.9 mrd). Total market net subscription was 23.6 mrd NOK. AUM reached 596.7 mrd NOK (17.9% market share).',

  totalSAM: {
    netSubscription: 2.9, // mrd. kr. (2,934 mill. from VFF Excel)
    netSubscriptionVffTotal: 23.6, // mrd. kr.
    netSubscriptionShare: 12.4, // %
    aum: 596.7, // mrd. kr.
    aumVffTotal: 3331.6, // mrd. kr.
    aumShare: 17.9, // %
  },

  privateSAM: {
    netSubscription: 0.7, // mrd. kr. (698 mill. from VFF personkunder Excel)
    netSubscriptionVffTotal: 7.2, // mrd. kr.
    netSubscriptionShare: 9.6, // %
    aum: 96.3, // mrd. kr.
    aumVffTotal: 943.2, // mrd. kr.
    aumShare: 10.2, // %
  },

  // Monthly net subscription history (mrd. kr.) for chart
  monthlyHistory: [
    { month: 'Jan 2026', sam: 2.1, vffTotal: 45.2 },
    { month: 'Feb 2026', sam: 0.8, vffTotal: 31.8 },
    { month: 'Mar 2026', sam: 1.5, vffTotal: 38.6 },
    { month: 'Apr 2026', sam: 0.9, vffTotal: 32.5 },
    { month: 'May 2026', sam: 1.4, vffTotal: 36.8 },
    { month: 'Jun 2026', sam: 1.0, vffTotal: 24.2 },
    { month: 'Jul 2026', sam: 2.9, vffTotal: 23.6 },
  ],
};

export default vffData;
