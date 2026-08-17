/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE.FACT_PRICE_DAILY).
 * Updated automatically — do not edit manually.
 */
const luxNavData = {
  valuationDate: '2026-08-13',
  lastUpdated: '2026-08-17T10:32:00Z',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          currency: 'EUR',
          nav: 217.621,
          changePct: 0.5285,
          taCode: 'SGPLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          currency: 'GBP',
          nav: 220.472,
          changePct: 0.55,
          taCode: 'SGPLBG',
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          currency: 'EUR',
          nav: 22411.637,
          changePct: 0.5286,
          taCode: 'SGPLIE',
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          currency: 'GBP',
          nav: 13857.48,
          changePct: 0.5504,
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
          nav: 216.121,
          changePct: 0.291,
          taCode: 'SGSLBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          currency: 'GBP',
          nav: 219.089,
          changePct: 0.3123,
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
          nav: 162.521,
          changePct: 0.4642,
          taCode: 'SGLAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          currency: 'EUR',
          nav: 165.455,
          changePct: 0.4669,
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
          nav: 183.33,
          changePct: -0.2188,
          taCode: 'SKTAE',
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          currency: 'EUR',
          nav: 182.828,
          changePct: -0.2156,
          taCode: 'SKTBE',
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          currency: 'GBP',
          nav: 155.885,
          changePct: -0.194,
          taCode: 'SKTBG',
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          currency: 'EUR',
          nav: 14975.234,
          changePct: -0.2157,
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
          nav: 19059.091,
          changePct: 1.0593,
          taCode: 'SEMPIU',
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          currency: 'GBP',
          nav: 176.875,
          changePct: 1.0587,
          taCode: 'SEMPBG',
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          currency: 'GBP',
          nav: 177.026,
          changePct: 1.059,
          taCode: 'SEMPH1G',
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          currency: 'GBP',
          nav: 17740.116,
          changePct: 1.0596,
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
          nav: 112.042,
          changePct: 0.6215,
          taCode: 'SUSPBG',
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          currency: 'GBP',
          nav: 11216.08,
          changePct: 0.622,
          taCode: 'SUSPFG',
        },
      ],
    },
  ],
};

export default luxNavData;
