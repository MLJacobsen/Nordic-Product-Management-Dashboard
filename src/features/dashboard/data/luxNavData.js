/**
 * Luxembourg fund NAV data sourced from Snowflake DWH_SAM.PRICE.
 * Auto-updated via automated pipeline.
 */
export const luxNavData = {
  valuationDate: '2026-07-01',
  lastUpdated: '2026-07-03T10:33:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932670927', nav: 211.676, changePct: 0.0984, currency: 'EUR' },
        { label: 'B GBP', isin: 'LU1932671149', nav: 215.342, changePct: -0.2779, currency: 'GBP' },
        { label: 'I EUR', isin: 'LU1932673434', nav: 21796.757, changePct: 0.0983, currency: 'EUR' },
        { label: 'I GBP', isin: 'LU1932673608', nav: 13533.43, changePct: -0.2776, currency: 'GBP' },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932658476', nav: 205.157, changePct: 0.1367, currency: 'EUR' },
        { label: 'B GBP', isin: 'LU1932658633', nav: 208.841, changePct: -0.2393, currency: 'GBP' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        { label: 'I USD', isin: 'LU2660379376', nav: 19254.693, changePct: -0.259, currency: 'USD' },
        { label: 'B GBP', isin: 'LU2658247064', nav: 181.835, changePct: -0.289, currency: 'GBP' },
        { label: 'H1 GBP', isin: 'LU2658246413', nav: 181.982, changePct: -0.2888, currency: 'GBP' },
        { label: 'I GBP', isin: 'LU2658246504', nav: 18235.242, changePct: -0.2887, currency: 'GBP' },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        { label: 'B GBP', isin: 'LU3189754693', nav: 109.66, changePct: -0.2193, currency: 'GBP' },
        { label: 'F GBP', isin: 'LU3189577201', nav: 10975.136, changePct: -0.2188, currency: 'GBP' },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932713917', nav: 151.986, changePct: 1.6296, currency: 'EUR' },
        { label: 'B EUR', isin: 'LU1932715532', nav: 154.557, changePct: 1.6321, currency: 'EUR' },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932684985', nav: 177.354, changePct: 0.9437, currency: 'EUR' },
        { label: 'B EUR', isin: 'LU1932686501', nav: 176.578, changePct: 0.9479, currency: 'EUR' },
        { label: 'B GBP', isin: 'LU1932686766', nav: 151.183, changePct: 0.5688, currency: 'GBP' },
        { label: 'I2 EUR', isin: 'LU2962150319', nav: 14465.966, changePct: 0.9472, currency: 'EUR' },
      ],
    },
  ],
};
