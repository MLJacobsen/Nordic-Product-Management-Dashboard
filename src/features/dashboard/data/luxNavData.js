/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE.FACT_PRICE_DAILY).
 * Updated automatically — do not edit manually.
 */
const luxNavData = {
  valuationDate: '2026-08-12',
  lastUpdated: '2026-08-14T10:32:00Z',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          currency: 'EUR',
          nav: 216.477,
          changePct: 0.2487,
          taCode: 'SGPLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          currency: 'GBP',
          nav: 219.266,
          changePct: 0.2451,
          taCode: 'SGPLBG',
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          currency: 'EUR',
          nav: 22293.795,
          changePct: 0.2492,
          taCode: 'SGPLIE',
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          currency: 'GBP',
          nav: 13781.628,
          changePct: 0.2449,
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
          nav: 215.494,
          changePct: 0.4835,
          taCode: 'SGSLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          currency: 'GBP',
          nav: 218.407,
          changePct: 0.4798,
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
          nav: 161.77,
          changePct: -0.4014,
          taCode: 'SGLAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          currency: 'EUR',
          nav: 164.686,
          changePct: -0.3986,
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
          nav: 183.732,
          changePct: -0.5079,
          taCode: 'SKTAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          currency: 'EUR',
          nav: 183.223,
          changePct: -0.5039,
          taCode: 'SKTBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          currency: 'GBP',
          nav: 156.188,
          changePct: -0.5077,
          taCode: 'SKTBG',
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          currency: 'EUR',
          nav: 15007.599,
          changePct: -0.5044,
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
          nav: 18859.314,
          changePct: 0.9668,
          taCode: 'SEMPIU',
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          currency: 'GBP',
          nav: 175.022,
          changePct: 0.9669,
          taCode: 'SEMPBG',
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          currency: 'GBP',
          nav: 175.171,
          changePct: 0.9666,
          taCode: 'SEMPH1G',
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          currency: 'GBP',
          nav: 17554.118,
          changePct: 0.9667,
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
          nav: 111.35,
          changePct: 0.1682,
          taCode: 'SUSPBG',
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          currency: 'GBP',
          nav: 11146.751,
          changePct: 0.169,
          taCode: 'SUSPFG',
        },
      ],
    },
  ],
};

export default luxNavData;
