/**
 * Storebrand SICAV Scorecard data — July 2026
 * Source: JPMorgan Client Scorecard (password-protected Excel)
 * Period: July 2026 (with June comparisons and YTD)
 */

const scorecardData = {
  period: 'July 2026',
  reportDate: '2026-07-31',

  // DEALING - MONTHLY STATS
  dealing: {
    title: 'Dealing – Monthly Stats',
    items: [
      { ref: 1, indicator: 'Dealing Volume (all types)', jul: 1858, jun: 1965, ytd: 9806 },
      { ref: 2, indicator: 'Total Subscriptions', jul: 857, jun: 870, ytd: 4590 },
      { ref: 3, indicator: 'Total Redemptions', jul: 985, jun: 1083, ytd: 5168 },
      { ref: 4, indicator: 'Total Transfers', jul: 16, jun: 12, ytd: 48 },
      { ref: 5, indicator: 'Total Switches', jul: 0, jun: 0, ytd: 0 },
      { ref: 6, indicator: 'Dealing Accuracy Rate', jul: '100%', jun: '100%', ytd: '98.2%' },
      { ref: 7, indicator: 'No of STP Deals', jul: 1842, jun: 1953, ytd: 9751 },
      { ref: 8, indicator: 'STP Rate', jul: '99.14%', jun: '99.39%', ytd: '99.44%' },
    ],
  },

  // Dealing breakdown by fund (from DEALING sheet)
  dealingByFund: [
    { fund: 'STOR US PLUS LU F GBP ACC', subscriptions: 533, redemptions: 607, transfers: 16, total: 1156 },
    { fund: 'STOR GBL PLUS LU I GBP ACC', subscriptions: 91, redemptions: 95, transfers: 0, total: 186 },
    { fund: 'STOR GBL PLUS LU B GBP ACC', subscriptions: 93, redemptions: 91, transfers: 0, total: 184 },
    { fund: 'STOR GBL PLUS LU H GBP ACC', subscriptions: 60, redemptions: 92, transfers: 0, total: 152 },
    { fund: 'STOR EM PLUS LU I GBP ACC', subscriptions: 54, redemptions: 68, transfers: 0, total: 122 },
    { fund: 'STOR EM PLUS LU B GBP ACC', subscriptions: 8, redemptions: 13, transfers: 0, total: 21 },
    { fund: 'SKAG KON-TIKI LU A EUR ACC', subscriptions: 6, redemptions: 6, transfers: 0, total: 12 },
    { fund: 'STOR GBL PLUS LU I EUR ACC', subscriptions: 1, redemptions: 6, transfers: 0, total: 7 },
    { fund: 'SKAG FOCUS LU B EUR ACC', subscriptions: 3, redemptions: 2, transfers: 0, total: 5 },
    { fund: 'SKAG KON-TIKI LU B EUR ACC', subscriptions: 3, redemptions: 1, transfers: 0, total: 4 },
    { fund: 'STOR EM PLUS LU I USD ACC', subscriptions: 1, redemptions: 2, transfers: 0, total: 3 },
    { fund: 'SKAG GLOBAL LU B EUR ACC', subscriptions: 1, redemptions: 2, transfers: 0, total: 3 },
    { fund: 'STOR GBL SOL LU B EUR ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'STOR GBL PLUS LU B EUR ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
    { fund: 'STOR US PLUS LU B GBP ACC', subscriptions: 1, redemptions: 0, transfers: 0, total: 1 },
  ],

  // REGISTRATION - MONTHLY STATS
  registration: {
    title: 'Registration – Active & New Accounts',
    items: [
      { ref: 9, indicator: 'Number of Active Accounts', jul: 66, jun: 65, ytd: 'N/A' },
      { ref: 10, indicator: 'Number of New Accounts', jul: 0, jun: 3, ytd: 10 },
      { ref: 11, indicator: 'Number of Active Holdings', jul: 192, jun: 191, ytd: 'N/A' },
      { ref: 12, indicator: 'Stopped Accounts (AML)', jul: 0, jun: 0, ytd: 'N/A' },
      { ref: 13, indicator: 'Stopped Accounts (PEP)', jul: 0, jun: 0, ytd: 'N/A' },
      { ref: 14, indicator: 'Transaction Monitoring Violations', jul: 0, jun: 0, ytd: 0 },
      { ref: 15, indicator: 'New Accounts in High Risk Countries', jul: 0, jun: 0, ytd: 0 },
      { ref: 16, indicator: 'Investors >20% of AUM', jul: 0, jun: 0, ytd: 'N/A' },
    ],
  },

  // Shareholder nationality breakdown (from Nationality Report sheet)
  shareholderByResidency: [
    { residency: 'United Kingdom', count: 164, pct: 72.9 },
    { residency: 'Luxembourg', count: 26, pct: 11.6 },
    { residency: 'Norway', count: 23, pct: 10.2 },
    { residency: 'France', count: 6, pct: 2.7 },
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
    { fund: 'SKAG KON-TIKI LU A EUR ACC', holders: 7 },
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
          { ref: 17, indicator: 'Value (EUR)', jul: 0, jun: 0 },
          { ref: 18, indicator: 'Number of Items', jul: 0, jun: 0 },
        ],
      },
      {
        label: 'Debtors',
        items: [
          { ref: 19, indicator: 'Value (EUR)', jul: 0, jun: 0 },
          { ref: 20, indicator: 'Number of Items', jul: 0, jun: 0 },
        ],
      },
      {
        label: 'Collection Account',
        items: [
          { ref: 21, indicator: 'Value (EUR)', jul: 0, jun: 0 },
          { ref: 22, indicator: 'Number of Items', jul: 0, jun: 0 },
        ],
      },
    ],
    other: [
      { ref: 23, indicator: 'Missing Payer Details', jul: 0, jun: 0 },
      { ref: 24, indicator: 'TA/FA Share Balance Differences', jul: 0, jun: 0 },
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
