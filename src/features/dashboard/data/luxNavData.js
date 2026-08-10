/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE.FACT_PRICE_DAILY).
 * Auto-updated by the "Update LUX NAV data" workflow.
 */

export const luxNavData = {
  valuationDate: '2026-08-06',
  lastUpdated: '2026-08-10T08:58:00Z',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          currency: 'EUR',
          nav: 215.361,
          changePct: 0.0153,
          taCode: null,
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          currency: 'GBP',
          nav: 218.698,
          changePct: -0.0439,
          taCode: null,
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          currency: 'EUR',
          nav: 22178.429,
          changePct: 0.0157,
          taCode: null,
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          currency: 'GBP',
          nav: 13745.75,
          changePct: -0.0438,
          taCode: null,
        },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932658476',
          currency: 'EUR',
          nav: 210.85,
          changePct: -0.3309,
          taCode: null,
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          currency: 'GBP',
          nav: 214.252,
          changePct: -0.3901,
          taCode: null,
        },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        {
          label: 'I USD',
          isin: 'LU2660379376',
          currency: 'USD',
          nav: 18574.241,
          changePct: -1.7387,
          taCode: null,
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          currency: 'GBP',
          nav: 172.93,
          changePct: -1.6437,
          taCode: null,
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          currency: 'GBP',
          nav: 173.076,
          changePct: -1.644,
          taCode: null,
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          currency: 'GBP',
          nav: 17343.967,
          changePct: -1.6438,
          taCode: null,
        },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        {
          label: 'B GBP',
          isin: 'LU3189754693',
          currency: 'GBP',
          nav: 111.188,
          changePct: -0.0476,
          taCode: null,
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          currency: 'GBP',
          nav: 11130.198,
          changePct: -0.0471,
          taCode: null,
        },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        {
          label: 'A EUR',
          isin: 'LU1932713917',
          currency: 'EUR',
          nav: 162.015,
          changePct: 0.105,
          taCode: null,
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          currency: 'EUR',
          nav: 164.91,
          changePct: 0.1074,
          taCode: null,
        },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        {
          label: 'A EUR',
          isin: 'LU1932684985',
          currency: 'EUR',
          nav: 185.737,
          changePct: -0.8975,
          taCode: null,
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          currency: 'EUR',
          nav: 185.179,
          changePct: -0.8938,
          taCode: null,
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          currency: 'GBP',
          nav: 158.264,
          changePct: -0.9519,
          taCode: null,
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          currency: 'EUR',
          nav: 15168.276,
          changePct: -0.8939,
          taCode: null,
        },
      ],
    },
  ],
};
