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

  // Dealing breakdown by fund (from DEALING sheet)
  dealingByFund: [
    { fund: 'STOR US PLUS LU F GBP ACC', subscriptions: 509, redemptions: 520, transfers: 6, total: 1035 },
    { fund: 'STOR GBL PLUS LU I GBP ACC', subscriptions: 105, redemptions: 102, transfers: 0, total: 207 },
    { fund: 'STOR GBL PLUS LU H GBP ACC', subscriptions: 51, redemptions: 139, transfers: 0, total: 190 },
    { fund: 'STOR GBL PLUS LU B GBP ACC', subscriptions: 69, redemptions: 107, transfers: 0, total: 176 },
    { fund: 'STOR EM PLUS LU I GBP ACC', subscriptions: 32, redemptions: 82, transfers: 0, total: 114 },
    { fund: 'STOR EM PLUS LU B GBP ACC', subscriptions: 7, redemptions: 10, transfers: 0, total: 17 },
    { fund: 'SKAG KON-TIKI LU B EUR ACC', subscriptions: 7, redemptions: 3, transfers: 0, total: 10 },
    { fund: 'STOR GBL PLUS LU I EUR ACC', subscriptions: 2, redemptions: 6, transfers: 0, total: 8 },
    { fund: 'STOR EM PLUS LU I USD ACC', subscriptions: 5, redemptions: 3, transfers: 0, total: 8 },
    { fund: 'SKAG GLOBAL LU B EUR ACC', subscriptions: 2, redemptions: 6, transfers: 0, total: 8 },
    { fund: 'SKAG KON-TIKI LU A EUR ACC', subscriptions: 5, redemptions: 1, transfers: 0, total: 6 },
    { fund: 'STOR GBL PLUS LU B EUR ACC', subscriptions: 1, redemptions: 0, transfers: 2, total: 3 },
    { fund: 'STOR GBL SOL LU B EUR ACC', subscriptions: 2, redemptions: 0, transfers: 0, total: 2 },
    { fund: 'STOR US PLUS LU B GBP ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'SKAG KON-TIKI LU I2 EUR ACC', subscriptions: 0, redemptions: 1, transfers: 0, total: 1 },
    { fund: 'SKAG FOCUS LU B EUR ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'SKAG GLOBAL LU A EUR ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'SKAG KON-TIKI LU B GBP ACC', subscriptions: 0, redemptions: 1, transfers: 0, total: 1 },
  ],

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

  // Shareholder nationality breakdown (from Nationality Report sheet)
  shareholderByResidency: [
    { residency: 'United Kingdom', count: 161, pct: 72.5 },
    { residency: 'Luxembourg', count: 26, pct: 11.7 },
    { residency: 'Norway', count: 23, pct: 10.4 },
    { residency: 'France', count: 5, pct: 2.3 },
    { residency: 'Ireland', count: 2, pct: 0.9 },
    { residency: 'Switzerland', count: 1, pct: 0.5 },
    { residency: 'Netherlands', count: 1, pct: 0.5 },
    { residency: 'Belgium', count: 1, pct: 0.5 },
    { residency: 'Jersey', count: 1, pct: 0.5 },
  ],

  // Holdings by fund (from Nationality Report)
  holdingsByFund: [
    { fund: 'STOR GBL PLUS LU I GBP ACC', holders: 36 },
    { fund: 'STOR US PLUS LU F GBP ACC', holders: 35 },
    { fund: 'STOR GBL PLUS LU H GBP ACC', holders: 31 },
    { fund: 'STOR EM PLUS LU I GBP ACC', holders: 30 },
    { fund: 'STOR GBL PLUS LU B GBP ACC', holders: 24 },
    { fund: 'SKAG KON-TIKI LU B EUR ACC', holders: 11 },
    { fund: 'SKAG KON-TIKI LU A EUR ACC', holders: 6 },
    { fund: 'SKAG GLOBAL LU A EUR ACC', holders: 6 },
    { fund: 'STOR GBL PLUS LU B EUR ACC', holders: 6 },
    { fund: 'STOR GBL SOL LU B EUR ACC', holders: 5 },
    { fund: 'STOR EM PLUS LU I USD ACC', holders: 4 },
    { fund: 'SKAG GLOBAL LU B EUR ACC', holders: 4 },
    { fund: 'SKAG FOCUS LU A EUR ACC', holders: 4 },
    { fund: 'STOR EM PLUS LU B GBP ACC', holders: 4 },
    { fund: 'SKAG FOCUS LU B EUR ACC', holders: 3 },
    { fund: 'STOR GBL PLUS LU I EUR ACC', holders: 2 },
    { fund: 'STOR US PLUS LU B GBP ACC', holders: 2 },
    { fund: 'STOR GBL SOL LU B GBP ACC', holders: 2 },
  ],

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
