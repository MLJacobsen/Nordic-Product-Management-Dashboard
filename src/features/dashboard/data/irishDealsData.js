/**
 * Irish funds YTD deal overview.
 * Source: Storebrand YTD deals.xlsx (AMX UCITS CCF platform)
 * 2 funds domiciled in Ireland, traded via AMX.
 * Last updated: 2026-06-19
 */

const irishDealsData = {
  lastUpdated: '2026-06-19',
  period: '2025 Full Year + YTD 2026 (Jan–May)',

  funds: [
    {
      name: 'Storebrand Global Plus',
      isin: 'IE000HZSK3O1',
      ccy: 'GBP',
      platform: 'AMX UCITS CCF',
      totalDeals: 38,
      totalInflows: 1753519,
      totalOutflows: -315831760,
      netFlow: -314078241,
      monthly: [
        { month: '2025-01', inflow: 21336, outflow: 0, deals: 2 },
        { month: '2025-02', inflow: 21720, outflow: 0, deals: 2 },
        { month: '2025-03', inflow: 19783, outflow: -190000000, deals: 3 },
        { month: '2025-04', inflow: 15468, outflow: 0, deals: 2 },
        { month: '2025-05', inflow: 8507, outflow: 0, deals: 2 },
        { month: '2025-06', inflow: 9333, outflow: -25000000, deals: 3 },
        { month: '2025-07', inflow: 9639, outflow: 0, deals: 2 },
        { month: '2025-08', inflow: 9081, outflow: -4400000, deals: 3 },
        { month: '2025-09', inflow: 9265, outflow: 0, deals: 2 },
        { month: '2025-10', inflow: 1570706, outflow: 0, deals: 4 },
        { month: '2025-11', inflow: 9685, outflow: 0, deals: 2 },
        { month: '2025-12', inflow: 9539, outflow: 0, deals: 2 },
        { month: '2026-01', inflow: 9865, outflow: 0, deals: 2 },
        { month: '2026-02', inflow: 9929, outflow: -96431760, deals: 4 },
        { month: '2026-03', inflow: 6228, outflow: 0, deals: 1 },
        { month: '2026-04', inflow: 6737, outflow: 0, deals: 1 },
        { month: '2026-05', inflow: 6698, outflow: 0, deals: 1 },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      isin: 'IE000U1WTGT2',
      ccy: 'USD',
      platform: 'AMX UCITS CCF',
      totalDeals: 45,
      totalInflows: 71262465,
      totalOutflows: -48179399,
      netFlow: 23083066,
      monthly: [
        { month: '2025-01', inflow: 0, outflow: -2593549, deals: 4 },
        { month: '2025-03', inflow: 0, outflow: -726088, deals: 3 },
        { month: '2025-04', inflow: 1363233, outflow: 0, deals: 4 },
        { month: '2025-05', inflow: 42969, outflow: 0, deals: 1 },
        { month: '2025-06', inflow: 4227987, outflow: 0, deals: 1 },
        { month: '2025-07', inflow: 48372, outflow: -19351481, deals: 2 },
        { month: '2025-08', inflow: 29335, outflow: 0, deals: 1 },
        { month: '2025-10', inflow: 34072728, outflow: -10967150, deals: 5 },
        { month: '2025-12', inflow: 15432132, outflow: 0, deals: 2 },
        { month: '2026-01', inflow: 2949783, outflow: 0, deals: 2 },
        { month: '2026-02', inflow: 7669738, outflow: 0, deals: 6 },
        { month: '2026-03', inflow: 152560, outflow: -11157300, deals: 5 },
        { month: '2026-04', inflow: 5162648, outflow: -35340, deals: 4 },
        { month: '2026-05', inflow: 110979, outflow: -3348491, deals: 5 },
      ],
    },
  ],
};

export default irishDealsData;
