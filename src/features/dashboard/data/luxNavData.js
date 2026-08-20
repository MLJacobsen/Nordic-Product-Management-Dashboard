/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated by the NAV update workflow.
 */

export const luxNavData = {
  valuationDate: '2026-08-18',
  lastUpdated: '2026-08-20T10:32:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          taCode: 'SGPBE',
          currency: 'EUR',
          nav: 213.672,
          changePct: -0.7594,
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          taCode: 'SGPBG',
          currency: 'GBP',
          nav: 216.621,
          changePct: -0.7327,
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          taCode: 'SGPIE',
          currency: 'EUR',
          nav: 22005.214,
          changePct: -0.7594,
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          taCode: 'SGPIG',
          currency: 'GBP',
          nav: 13615.612,
          changePct: -0.7326,
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
          nav: 210.71,
          changePct: -1.2568,
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          taCode: 'SGSBG',
          currency: 'GBP',
          nav: 213.752,
          changePct: -1.23,
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
          nav: 161.21,
          changePct: 0.6732,
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          taCode: 'SGLBE',
          currency: 'EUR',
          nav: 164.141,
          changePct: 0.6753,
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
          nav: 180.072,
          changePct: -1.5295,
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          taCode: 'SKTBE',
          currency: 'EUR',
          nav: 179.614,
          changePct: -1.5258,
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          taCode: 'SKTBG',
          currency: 'GBP',
          nav: 153.251,
          changePct: -1.4989,
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          taCode: 'SKTI2E',
          currency: 'EUR',
          nav: 14711.632,
          changePct: -1.5261,
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
          nav: 19002.793,
          changePct: -1.0742,
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          taCode: 'SEMPBG',
          currency: 'GBP',
          nav: 175.901,
          changePct: -1.0051,
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          taCode: 'SEMPH1G',
          currency: 'GBP',
          nav: 176.052,
          changePct: -1.0048,
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          taCode: 'SEMPIG',
          currency: 'GBP',
          nav: 17642.711,
          changePct: -1.0049,
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
          nav: 109.834,
          changePct: -0.7096,
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          taCode: 'SUSPFG',
          currency: 'GBP',
          nav: 10995.336,
          changePct: -0.7088,
        },
      ],
    },
  ],
};
