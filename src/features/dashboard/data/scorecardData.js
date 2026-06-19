/**
 * Storebrand SICAV Scorecard data — May 2026
 * Source: JPMorgan Client Scorecard (password-protected Excel)
 * Period: May 2026 (with April comparisons and YTD)
 */

const scorecardData = {
  period: 'May 2026',
  reportDate: '2026-05-31',

  // DEALING - MONTHLY STATS
  dealing: {
    title: 'Dealing – Monthly Stats',
    items: [
      { ref: 1, indicator: 'Dealing Volume (all types)', may: 1789, apr: 1624, ytd: 5983 },
      { ref: 2, indicator: 'Total Subscriptions', may: 800, apr: 895, ytd: 2863 },
      { ref: 3, indicator: 'Total Redemptions', may: 981, apr: 725, ytd: 3100 },
      { ref: 4, indicator: 'Total Transfers', may: 8, apr: 4, ytd: 20 },
      { ref: 5, indicator: 'Total Switches', may: 0, apr: 0, ytd: 0 },
      { ref: 6, indicator: 'Dealing Accuracy Rate', may: '100%', apr: '100%', ytd: '100%' },
      { ref: 7, indicator: 'No of STP Deals', may: 1781, apr: 1617, ytd: 5956 },
      { ref: 8, indicator: 'STP Rate', may: '99.55%', apr: '99.57%', ytd: '99.55%' },
    ],
  },

  // REGISTRATION - MONTHLY STATS
  registration: {
    title: 'Registration – Active & New Accounts',
    items: [
      { ref: 9, indicator: 'Number of Active Accounts', may: 65, apr: 65, ytd: 'N/A' },
      { ref: 10, indicator: 'Number of New Accounts', may: 0, apr: 0, ytd: 7 },
      { ref: 11, indicator: 'Number of Active Holdings', may: 188, apr: 190, ytd: 'N/A' },
      { ref: 12, indicator: 'Stopped Accounts (AML)', may: 0, apr: 0, ytd: 'N/A' },
      { ref: 13, indicator: 'Stopped Accounts (PEP)', may: 0, apr: 0, ytd: 'N/A' },
      { ref: 14, indicator: 'Transaction Monitoring Violations', may: 0, apr: 0, ytd: 0 },
      { ref: 15, indicator: 'New Accounts in High Risk Countries', may: 0, apr: 0, ytd: 0 },
      { ref: 16, indicator: 'Investors >20% of AUM', may: 0, apr: 0, ytd: 'N/A' },
    ],
  },

  // CASH - ITEMS OVER 30 DAYS
  cash: {
    title: 'Cash – Items Over 30 Days (End of Month)',
    sections: [
      {
        label: 'Creditors',
        items: [
          { ref: 17, indicator: 'Value (EUR)', may: 0, apr: 0 },
          { ref: 18, indicator: 'Number of Items', may: 0, apr: 0 },
        ],
      },
      {
        label: 'Debtors',
        items: [
          { ref: 19, indicator: 'Value (EUR)', may: 0, apr: 0 },
          { ref: 20, indicator: 'Number of Items', may: 0, apr: 0 },
        ],
      },
      {
        label: 'Collection Account',
        items: [
          { ref: 21, indicator: 'Value (EUR)', may: 0, apr: 0 },
          { ref: 22, indicator: 'Number of Items', may: 0, apr: 0 },
        ],
      },
    ],
    other: [
      { ref: 23, indicator: 'Missing Payer Details', may: 0, apr: 0 },
      { ref: 24, indicator: 'TA/FA Share Balance Differences', may: 0, apr: 0 },
    ],
  },

  // LATE TRADING
  lateTrading: {
    title: 'Late Trading',
    status: 'None',
  },

  // COMPLAINTS & ERRORS
  complaints: {
    title: 'Complaints & Errors/Omissions',
    complaintsStatus: 'None',
    errorsStatus: 'None',
  },
};

export default scorecardData;
