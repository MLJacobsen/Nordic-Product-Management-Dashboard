/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated by Copilot automation.
 */

const luxNavData = {
  valuationDate: '2026-08-25',
  lastUpdated: '2026-08-28T10:32:00+02:00',
  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932670927', currency: 'EUR', nav: 212.933, changePct: 0.3866, taCodes: [] },
        { label: 'B GBP', isin: 'LU1932671149', currency: 'GBP', nav: 216.059, changePct: 0.4244, taCodes: [] },
        { label: 'I EUR', isin: 'LU1932673434', currency: 'EUR', nav: 21929.527, changePct: 0.3869, taCodes: [] },
        { label: 'I GBP', isin: 'LU1932673608', currency: 'GBP', nav: 13580.542, changePct: 0.4244, taCodes: [] },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932658476', currency: 'EUR', nav: 209.078, changePct: -0.0545, taCodes: [] },
        { label: 'B GBP', isin: 'LU1932658633', currency: 'GBP', nav: 212.280, changePct: -0.0174, taCodes: [] },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        { label: 'I USD', isin: 'LU2660379376', currency: 'USD', nav: 19041.974, changePct: 0.5555, taCodes: [] },
        { label: 'B GBP', isin: 'LU2658247064', currency: 'GBP', nav: 175.090, changePct: 0.5623, taCodes: [] },
        { label: 'H1 GBP', isin: 'LU2658246413', currency: 'GBP', nav: 175.242, changePct: 0.5629, taCodes: [] },
        { label: 'I GBP', isin: 'LU2658246504', currency: 'GBP', nav: 17561.922, changePct: 0.5631, taCodes: [] },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        { label: 'B GBP', isin: 'LU3189754693', currency: 'GBP', nav: 109.181, changePct: 0.3142, taCodes: [] },
        { label: 'F GBP', isin: 'LU3189577201', currency: 'GBP', nav: 10930.396, changePct: 0.3148, taCodes: [] },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932713917', currency: 'EUR', nav: 163.305, changePct: -0.7843, taCodes: [] },
        { label: 'B EUR', isin: 'LU1932715532', currency: 'EUR', nav: 166.305, changePct: -0.7816, taCodes: [] },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932684985', currency: 'EUR', nav: 182.673, changePct: 0.7912, taCodes: [] },
        { label: 'B EUR', isin: 'LU1932686501', currency: 'EUR', nav: 182.257, changePct: 0.7953, taCodes: [] },
        { label: 'B GBP', isin: 'LU1932686766', currency: 'GBP', nav: 155.641, changePct: 0.8331, taCodes: [] },
        { label: 'I2 EUR', isin: 'LU2962150319', currency: 'EUR', nav: 14927.656, changePct: 0.7946, taCodes: [] },
      ],
    },
  ],
};

export default luxNavData;
