/**
 * Luxembourg fund NAV data sourced from Snowflake DWH_SAM.PRICE.
 * Auto-updated by scheduled pipeline.
 */

export const luxNavData = {
  valuationDate: '2026-07-03',
  lastUpdated: '2026-07-07T10:32:00Z',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932670927', currency: 'EUR', nav: 211.110, changePct: 0.0000 },
        { label: 'B GBP', isin: 'LU1932671149', currency: 'GBP', nav: 214.135, changePct: 0.0000 },
        { label: 'I EUR', isin: 'LU1932673434', currency: 'EUR', nav: 21738.541, changePct: 0.0000 },
        { label: 'I GBP', isin: 'LU1932673608', currency: 'GBP', nav: 13457.603, changePct: 0.0000 },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932658476', currency: 'EUR', nav: 205.503, changePct: 0.0000 },
        { label: 'B GBP', isin: 'LU1932658633', currency: 'GBP', nav: 208.579, changePct: 0.0000 },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        { label: 'B GBP', isin: 'LU2658247064', currency: 'GBP', nav: 180.620, changePct: 2.2335 },
        { label: 'H1 GBP', isin: 'LU2658246413', currency: 'GBP', nav: 180.766, changePct: 2.2334 },
        { label: 'I GBP', isin: 'LU2658246504', currency: 'GBP', nav: 18113.488, changePct: 2.2338 },
        { label: 'I USD', isin: 'LU2660379376', currency: 'USD', nav: 19242.859, changePct: 2.1116 },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        { label: 'B GBP', isin: 'LU3189754693', currency: 'GBP', nav: 108.623, changePct: 0.0000 },
        { label: 'F GBP', isin: 'LU3189577201', currency: 'GBP', nav: 10871.393, changePct: 0.0000 },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932713917', currency: 'EUR', nav: 154.960, changePct: 0.0000 },
        { label: 'B EUR', isin: 'LU1932715532', currency: 'EUR', nav: 157.585, changePct: 0.0000 },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932684985', currency: 'EUR', nav: 178.823, changePct: 1.4040 },
        { label: 'B EUR', isin: 'LU1932686501', currency: 'EUR', nav: 178.053, changePct: 1.4073 },
        { label: 'B GBP', isin: 'LU1932686766', currency: 'GBP', nav: 152.174, changePct: 1.5251 },
        { label: 'I2 EUR', isin: 'LU2962150319', currency: 'EUR', nav: 14586.743, changePct: 1.4073 },
      ],
    },
  ],
};
