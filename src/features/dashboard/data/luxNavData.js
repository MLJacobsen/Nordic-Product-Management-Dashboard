/**
 * Luxembourg fund NAV data sourced from Snowflake DWH_SAM.PRICE.
 * Auto-updated by the LUX NAV update workflow.
 */

export const luxNavData = {
  valuationDate: '2026-06-22',
  lastUpdated: '2026-06-25T10:32:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932670927', currency: 'EUR', nav: 211.143, changePct: 0.2217 },
        { label: 'B GBP', isin: 'LU1932671149', currency: 'GBP', nav: 216.008, changePct: -0.2139 },
        { label: 'I EUR', isin: 'LU1932673434', currency: 'EUR', nav: 21741.379, changePct: 0.2231 },
        { label: 'I GBP', isin: 'LU1932673608', currency: 'GBP', nav: 13574.966, changePct: -0.2131 },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932658476', currency: 'EUR', nav: 204.007, changePct: 0.3952 },
        { label: 'B GBP', isin: 'LU1932658633', currency: 'GBP', nav: 208.838, changePct: -0.0416 },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        { label: 'I USD', isin: 'LU2660379376', currency: 'USD', nav: 20208.405, changePct: 0.7299 },
        { label: 'B GBP', isin: 'LU2658247064', currency: 'GBP', nav: 191.046, changePct: 0.486 },
        { label: 'H1 GBP', isin: 'LU2658246413', currency: 'GBP', nav: 191.199, changePct: 0.4867 },
        { label: 'I GBP', isin: 'LU2658246504', currency: 'GBP', nav: 19158.627, changePct: 0.487 },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        { label: 'B GBP', isin: 'LU3189754693', currency: 'GBP', nav: 109.276, changePct: -0.362 },
        { label: 'F GBP', isin: 'LU3189577201', currency: 'GBP', nav: 10936.227, changePct: -0.3599 },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932713917', currency: 'EUR', nav: 147.651, changePct: -0.8568 },
        { label: 'B EUR', isin: 'LU1932715532', currency: 'EUR', nav: 150.114, changePct: -0.8461 },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932684985', currency: 'EUR', nav: 181.41, changePct: -0.5499 },
        { label: 'B EUR', isin: 'LU1932686501', currency: 'EUR', nav: 180.553, changePct: -0.5382 },
        { label: 'B GBP', isin: 'LU1932686766', currency: 'GBP', nav: 155.456, changePct: -0.986 },
        { label: 'I2 EUR', isin: 'LU2962150319', currency: 'EUR', nav: 14792.344, changePct: -0.5394 },
      ],
    },
  ],
};
