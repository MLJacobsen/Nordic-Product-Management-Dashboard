/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated via scheduled pipeline.
 */

export const luxNavData = {
  valuationDate: '2026-06-18',
  lastUpdated: '2026-06-22T10:31:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        {
          label: 'B EUR',
          isin: 'LU1932670927',
          currency: 'EUR',
          taCode: 'SGPBE',
          nav: 210.676,
          changePct: 1.5438,
        },
        {
          label: 'B GBP',
          isin: 'LU1932671149',
          currency: 'GBP',
          taCode: 'SGPBG',
          nav: 216.471,
          changePct: 1.7146,
        },
        {
          label: 'I EUR',
          isin: 'LU1932673434',
          currency: 'EUR',
          taCode: 'SGPIE',
          nav: 21692.973,
          changePct: 1.5437,
        },
        {
          label: 'I GBP',
          isin: 'LU1932673608',
          currency: 'GBP',
          taCode: 'SGPIG',
          nav: 13603.951,
          changePct: 1.7153,
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
          taCode: 'SGSBE',
          nav: 203.204,
          changePct: 0.7806,
        },
        {
          label: 'B GBP',
          isin: 'LU1932658633',
          currency: 'GBP',
          taCode: 'SGSBG',
          nav: 208.925,
          changePct: 0.9504,
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
          taCode: 'SGLAE',
          nav: 148.927,
          changePct: -0.2258,
        },
        {
          label: 'B EUR',
          isin: 'LU1932715532',
          currency: 'EUR',
          taCode: 'SGLBE',
          nav: 151.395,
          changePct: -0.2228,
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
          taCode: 'SKTAE',
          nav: 182.287,
          changePct: -0.4658,
        },
        {
          label: 'B EUR',
          isin: 'LU1932686501',
          currency: 'EUR',
          taCode: 'SKTBE',
          nav: 181.398,
          changePct: -0.462,
        },
        {
          label: 'B GBP',
          isin: 'LU1932686766',
          currency: 'GBP',
          taCode: 'SKTBG',
          nav: 156.867,
          changePct: -0.2937,
        },
        {
          label: 'I2 EUR',
          isin: 'LU2962150319',
          currency: 'EUR',
          taCode: 'SKTI2',
          nav: 14861.829,
          changePct: -0.4623,
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
          taCode: 'SEMIU',
          nav: 20081.698,
          changePct: 0.3206,
        },
        {
          label: 'B GBP',
          isin: 'LU2658247064',
          currency: 'GBP',
          taCode: 'SEMBG',
          nav: 190.008,
          changePct: 1.3955,
        },
        {
          label: 'H1 GBP',
          isin: 'LU2658246413',
          currency: 'GBP',
          taCode: 'SEMH1',
          nav: 190.159,
          changePct: 1.396,
        },
        {
          label: 'I GBP',
          isin: 'LU2658246504',
          currency: 'GBP',
          taCode: 'SEMIG',
          nav: 19054.232,
          changePct: 1.3956,
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
          taCode: 'SUSPB',
          nav: 109.673,
          changePct: 2.2563,
        },
        {
          label: 'F GBP',
          isin: 'LU3189577201',
          currency: 'GBP',
          taCode: 'SUSPF',
          nav: 10975.729,
          changePct: 2.2572,
        },
      ],
    },
  ],
};
