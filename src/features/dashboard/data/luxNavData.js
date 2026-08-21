/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated by the NAV update workflow.
 */

export const luxNavData = {
  valuationDate: '2026-08-19',
  lastUpdated: '2026-08-21T10:31:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          taCode: 'SGPBE',
          currency: 'EUR',
          nav: 212.555,
          changePct: -0.5228,
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          taCode: 'SGPBG',
          currency: 'GBP',
          nav: 215.951,
          changePct: -0.3093,
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          taCode: 'SGPIE',
          currency: 'EUR',
          nav: 21890.231,
          changePct: -0.5225,
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          taCode: 'SGPIG',
          currency: 'GBP',
          nav: 13573.543,
          changePct: -0.309,
        },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932658476',
          taCode: 'SGSBE',
          currency: 'EUR',
          nav: 209.8,
          changePct: -0.4319,
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          taCode: 'SGSBG',
          currency: 'GBP',
          nav: 213.286,
          changePct: -0.218,
        },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        {
          label: 'A EUR',
          isin: 'LU1932713917',
          taCode: 'SGLAE',
          currency: 'EUR',
          nav: 161.576,
          changePct: 0.227,
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          taCode: 'SGLBE',
          currency: 'EUR',
          nav: 164.518,
          changePct: 0.2297,
        },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        {
          label: 'A EUR',
          isin: 'LU1932684985',
          taCode: 'SKTAE',
          currency: 'EUR',
          nav: 178.339,
          changePct: -0.9624,
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          taCode: 'SKTBE',
          currency: 'EUR',
          nav: 177.892,
          changePct: -0.9587,
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          taCode: 'SKTBG',
          currency: 'GBP',
          nav: 152.108,
          changePct: -0.7458,
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          taCode: 'SKTI2E',
          currency: 'EUR',
          nav: 14570.543,
          changePct: -0.959,
        },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        {
          label: 'I USD',
          isin: 'LU2660379376',
          taCode: 'SEMPIU',
          currency: 'USD',
          nav: 18698.827,
          changePct: -1.5996,
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          taCode: 'SEMPBG',
          currency: 'GBP',
          nav: 172.254,
          changePct: -2.0733,
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          taCode: 'SEMPH1G',
          currency: 'GBP',
          nav: 172.402,
          changePct: -2.0733,
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          taCode: 'SEMPIG',
          currency: 'GBP',
          nav: 17276.977,
          changePct: -2.073,
        },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        {
          label: 'B GBP',
          isin: 'LU3189754693',
          taCode: 'SUSPBG',
          currency: 'GBP',
          nav: 109.762,
          changePct: -0.0656,
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          taCode: 'SUSPFG',
          currency: 'GBP',
          nav: 10988.164,
          changePct: -0.0652,
        },
      ],
    },
  ],
};
