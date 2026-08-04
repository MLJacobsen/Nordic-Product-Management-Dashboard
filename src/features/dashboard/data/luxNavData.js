/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated via CI / Copilot automation.
 */

const luxNavData = {
  valuationDate: '2026-07-31',
  lastUpdated: '2026-08-04T10:31:00+02:00',

  funds: [
    {
      name: 'Storebrand Global Plus LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932670927', currency: 'EUR', nav: 210.311, changePct: 0.4418 },
        { label: 'B GBP', isin: 'LU1932671149', currency: 'GBP', nav: 213.15, changePct: 0.2351 },
        { label: 'I EUR', isin: 'LU1932673434', currency: 'EUR', nav: 21657.977, changePct: 0.442 },
        { label: 'I GBP', isin: 'LU1932673608', currency: 'GBP', nav: 13396.818, changePct: 0.2355 },
      ],
    },
    {
      name: 'Storebrand Global Solutions LUX',
      shareClasses: [
        { label: 'B EUR', isin: 'LU1932658476', currency: 'EUR', nav: 206.049, changePct: 0.3766 },
        { label: 'B GBP', isin: 'LU1932658633', currency: 'GBP', nav: 208.962, changePct: 0.1702 },
      ],
    },
    {
      name: 'Storebrand US Plus LUX',
      shareClasses: [
        { label: 'B GBP', isin: 'LU3189754693', currency: 'GBP', nav: 107.902, changePct: 0.402 },
        { label: 'F GBP', isin: 'LU3189577201', currency: 'GBP', nav: 10800.902, changePct: 0.4029 },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus',
      shareClasses: [
        { label: 'I USD', isin: 'LU2660379376', currency: 'USD', nav: 18611.687, changePct: 6.4022 },
        { label: 'B GBP', isin: 'LU2658247064', currency: 'GBP', nav: 173.384, changePct: 6.1647 },
        { label: 'H1 GBP', isin: 'LU2658246413', currency: 'GBP', nav: 173.53, changePct: 6.1651 },
        { label: 'I GBP', isin: 'LU2658246504', currency: 'GBP', nav: 17389.175, changePct: 6.1646 },
      ],
    },
    {
      name: 'Skagen Global LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932713917', currency: 'EUR', nav: 161.029, changePct: 0.3471 },
        { label: 'B EUR', isin: 'LU1932715532', currency: 'EUR', nav: 163.88, changePct: 0.3496 },
      ],
    },
    {
      name: 'Skagen Kon-Tiki LUX',
      shareClasses: [
        { label: 'A EUR', isin: 'LU1932684985', currency: 'EUR', nav: 187.362, changePct: 3.8552 },
        { label: 'B EUR', isin: 'LU1932686501', currency: 'EUR', nav: 186.756, changePct: 3.8595 },
        { label: 'B GBP', isin: 'LU1932686766', currency: 'GBP', nav: 159.297, changePct: 3.6456 },
        { label: 'I2 EUR', isin: 'LU2962150319', currency: 'EUR', nav: 15297.794, changePct: 3.8587 },
      ],
    },
  ],
};

export default luxNavData;
