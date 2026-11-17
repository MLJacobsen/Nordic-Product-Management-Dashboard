/**
 * VFF (Verdipapirfondenes Forening) monthly inflow data for SAM.
 * Source: https://vff.no - "Totalmarkedet per selskap" monthly Excel reports
 * Update this data monthly when VFF publishes new figures (typically 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */

const vffData = {
  month: 'August 2026',
  dataMonth: 8, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  summary: 'Net subscription in August was essentially flat for Storebrand AM (-0.01 mrd, a slight net redemption month). Total market net subscription was 23.96 mrd NOK. AUM reached 513.5 mrd NOK (15.7% market share).',

  totalSAM: {
    netSubscription: -0.01, // mrd. kr. (-10,069 thousand kr. from VFF Excel)
    netSubscriptionVffTotal: 23.96, // mrd. kr. (23,959,420 thousand kr.)
    netSubscriptionShare: -0.04, // %
    aum: 513.5, // mrd. kr. (513,471,584 thousand kr.)
    aumVffTotal: 3270.3, // mrd. kr. (3,270,333,867 thousand kr.)
    aumShare: 15.7, // %
  },

  // NOTE: privateSAM below is stale (carried over from the prior report, June 2026).
  // The August VFF "Totalmarkedet" Excel only contained the Forvaltningsselskaper
  // (company-level) table, not the personkunder/private-client breakdown.
  // Refresh this block once the VFF personkunder export is available.
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
    // Note: July 2026 company-level data was not available/provided, so
    // there's a gap between Jun and Aug in this history.
    { month: 'Aug 2026', sam: -0.01, vffTotal: 23.96 },
  ],
};

export default vffData;
