/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE.FACT_PRICE_DAILY).
 * Updated automatically — do not edit manually.
 */
const luxNavData = {
  valuationDate: '2026-07-30',
  lastUpdated: '2026-08-03T12:43:00Z',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          currency: 'EUR',
          nav: 209.386,
          changePct: 0.6731,
          taCode: 'SGPLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          currency: 'GBP',
          nav: 212.65,
          changePct: 0.6989,
          taCode: 'SGPLBG',
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          currency: 'EUR',
          nav: 21562.672,
          changePct: 0.6731,
          taCode: 'SGPLIE',
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          currency: 'GBP',
          nav: 13365.344,
          changePct: 0.6989,
          taCode: 'SGPLIG',
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
          nav: 205.276,
          changePct: 1.1227,
          taCode: 'SGSLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          currency: 'GBP',
          nav: 208.607,
          changePct: 1.1487,
          taCode: 'SGSLBG',
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
          nav: 160.472,
          changePct: -2.1798,
          taCode: 'SGLAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          currency: 'EUR',
          nav: 163.309,
          changePct: -2.1774,
          taCode: 'SGLBE',
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
          nav: 180.407,
          changePct: -0.1229,
          taCode: 'SKTAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          currency: 'EUR',
          nav: 179.816,
          changePct: -0.1194,
          taCode: 'SKTBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          currency: 'GBP',
          nav: 153.694,
          changePct: -0.0936,
          taCode: 'SKTBG',
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          currency: 'EUR',
          nav: 14729.425,
          changePct: -0.1196,
          taCode: 'SKTI2E',
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
          nav: 17491.83,
          changePct: 0.1927,
          taCode: 'SEMPIU',
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          currency: 'GBP',
          nav: 163.316,
          changePct: -0.8451,
          taCode: 'SEMPBG',
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          currency: 'GBP',
          nav: 163.453,
          changePct: -0.8444,
          taCode: 'SEMPH1G',
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          currency: 'GBP',
          nav: 16379.451,
          changePct: -0.8446,
          taCode: 'SEMPIG',
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
          nav: 107.47,
          changePct: 0.5831,
          taCode: 'SUSPBG',
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          currency: 'GBP',
          nav: 10757.563,
          changePct: 0.5832,
          taCode: 'SUSPFG',
        },
      ],
    },
  ],
};

export default luxNavData;
