/**
 * Storebrand SICAV Scorecard data — June 2026
 * Source: JPMorgan Client Scorecard (password-protected Excel)
 * Period: June 2026 (with May comparisons and YTD)
 */

const scorecardData = {
  period: 'June 2026',
  reportDate: '2026-06-30',

  // DEALING - MONTHLY STATS
  dealing: {
    title: 'Dealing – Monthly Stats',
    items: [
      { ref: 1, indicator: 'Dealing Volume (all types)', jun: 1965, may: 1789, ytd: 7948 },
      { ref: 2, indicator: 'Total Subscriptions', jun: 870, may: 800, ytd: 3733 },
      { ref: 3, indicator: 'Total Redemptions', jun: 1083, may: 981, ytd: 4183 },
      { ref: 4, indicator: 'Total Transfers', jun: 12, may: 8, ytd: 32 },
      { ref: 5, indicator: 'Total Switches', jun: 0, may: 0, ytd: 0 },
      { ref: 6, indicator: 'Dealing Accuracy Rate', jun: '100%', may: '100%', ytd: '97.4%' },
      { ref: 7, indicator: 'No of STP Deals', jun: 1953, may: 1781, ytd: 7909 },
      { ref: 8, indicator: 'STP Rate', jun: '99.39%', may: '99.55%', ytd: '99.51%' },
    ],
  },

  // Dealing breakdown by fund (from DEALING sheet)
  dealingByFund: [
    { fund: 'STOR US PLUS LU F GBP ACC', subscriptions: 563, redemptions: 546, transfers: 12, total: 1121 },
    { fund: 'STOR GBL PLUS LU H GBP ACC', subscriptions: 87, redemptions: 166, transfers: 0, total: 253 },
    { fund: 'STOR GBL PLUS LU B GBP ACC', subscriptions: 99, redemptions: 126, transfers: 0, total: 225 },
    { fund: 'STOR GBL PLUS LU I GBP ACC', subscriptions: 90, redemptions: 132, transfers: 0, total: 222 },
    { fund: 'STOR EM PLUS LU I GBP ACC', subscriptions: 19, redemptions: 80, transfers: 0, total: 99 },
    { fund: 'STOR EM PLUS LU B GBP ACC', subscriptions: 3, redemptions: 10, transfers: 0, total: 13 },
    { fund: 'STOR GBL PLUS LU I EUR ACC', subscriptions: 3, redemptions: 9, transfers: 0, total: 12 },
    { fund: 'SKAG KON-TIKI LU I2 EUR ACC', subscriptions: 0, redemptions: 4, transfers: 0, total: 4 },
    { fund: 'SKAG KON-TIKI LU B EUR ACC', subscriptions: 1, redemptions: 2, transfers: 0, total: 3 },
    { fund: 'SKAG FOCUS LU B EUR ACC', subscriptions: 1, redemptions: 1, transfers: 0, total: 2 },
    { fund: 'STOR GBL PLUS LU B EUR ACC', subscriptions: 0, redemptions: 2, transfers: 0, total: 2 },
    { fund: 'STOR EM PLUS LU I USD ACC', subscriptions: 1, redemptions: 1, transfers: 0, total: 2 },
    { fund: 'SKAG GLOBAL LU B EUR ACC', subscriptions: 0, redemptions: 2, transfers: 0, total: 2 },
    { fund: 'STOR US PLUS LU B GBP ACC', subscriptions: 2, redemptions: 0, transfers: 0, total: 2 },
    { fund: 'SKAG KON-TIKI LU A EUR ACC', subscriptions: 0, redemptions: 1, transfers: 0, total: 1 },
    { fund: 'STOR GBL SOL LU B EUR ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'SKAG KON-TIKI LU B GBP ACC', subscriptions: 0, redemptions: 1, transfers: 0, total: 1 },
  ],

  // REGISTRATION - MONTHLY STATS
  registration: {
    title: 'Registration – Active & New Accounts',
    items: [
      { ref: 9, indicator: 'Number of Active Accounts', jun: 65, may: 65, ytd: 'N/A' },
      { ref: 10, indicator: 'Number of New Accounts', jun: 3, may: 0, ytd: 10 },
      { ref: 11, indicator: 'Number of Active Holdings', jun: 191, may: 188, ytd: 'N/A' },
      { ref: 12, indicator: 'Stopped Accounts (AML)', jun: 0, may: 0, ytd: 'N/A' },
      { ref: 13, indicator: 'Stopped Accounts (PEP)', jun: 0, may: 0, ytd: 'N/A' },
      { ref: 14, indicator: 'Transaction Monitoring Violations', jun: 0, may: 0, ytd: 0 },
      { ref: 15, indicator: 'New Accounts in High Risk Countries', jun: 0, may: 0, ytd: 0 },
      { ref: 16, indicator: 'Investors >20% of AUM', jun: 0, may: 0, ytd: 'N/A' },
    ],
  },

  // Shareholder nationality breakdown (from Nationality Report sheet)
  shareholderByResidency: [
    { residency: 'United Kingdom', count: 164, pct: 73.2 },
    { residency: 'Luxembourg', count: 26, pct: 11.6 },
    { residency: 'Norway', count: 23, pct: 10.3 },
    { residency: 'France', count: 5, pct: 2.2 },
    { residency: 'Ireland', count: 2, pct: 0.9 },
    { residency: 'Switzerland', count: 1, pct: 0.4 },
    { residency: 'Netherlands', count: 1, pct: 0.4 },
    { residency: 'Belgium', count: 1, pct: 0.4 },
    { residency: 'Jersey', count: 1, pct: 0.4 },
  ],

  // Holdings by fund (from Nationality Report)
  holdingsByFund: [
    { fund: 'STOR GBL PLUS LU I GBP ACC', holders: 36 },
    { fund: 'STOR US PLUS LU F GBP ACC', holders: 35 },
    { fund: 'STOR GBL PLUS LU H GBP ACC', holders: 33 },
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
    { fund: 'STOR US PLUS LU B GBP ACC', holders: 3 },
    { fund: 'STOR GBL PLUS LU I EUR ACC', holders: 2 },
    { fund: 'STOR GBL SOL LU B GBP ACC', holders: 2 },
    { fund: 'SKAG KON-TIKI LU I2 EUR ACC', holders: 1 },
    { fund: 'STOR GBL SOL LU I EUR ACC', holders: 1 },
    { fund: 'SKAG KON-TIKI LU B GBP ACC', holders: 1 },
    { fund: 'STOR EM PLUS LU H1 GBP ACC', holders: 1 },
    { fund: 'STOR GBL PLUS LU A EUR ACC', holders: 1 },
    { fund: 'STOR GBL SOL LU A EUR ACC', holders: 1 },
  ],

  // CASH - ITEMS OVER 30 DAYS
  cash: {
    title: 'Cash – Items Over 30 Days (End of Month)',
    sections: [
      {
        label: 'Creditors',
        items: [
          { ref: 17, indicator: 'Value (EUR)', jun: 0, may: 0 },
          { ref: 18, indicator: 'Number of Items', jun: 0, may: 0 },
        ],
      },
      {
        label: 'Debtors',
        items: [
          { ref: 19, indicator: 'Value (EUR)', jun: 0, may: 0 },
          { ref: 20, indicator: 'Number of Items', jun: 0, may: 0 },
        ],
      },
      {
        label: 'Collection Account',
        items: [
          { ref: 21, indicator: 'Value (EUR)', jun: 0, may: 0 },
          { ref: 22, indicator: 'Number of Items', jun: 0, may: 0 },
        ],
      },
    ],
    other: [
      { ref: 23, indicator: 'Missing Payer Details', jun: 0, may: 0 },
      { ref: 24, indicator: 'TA/FA Share Balance Differences', jun: 0, may: 0 },
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
