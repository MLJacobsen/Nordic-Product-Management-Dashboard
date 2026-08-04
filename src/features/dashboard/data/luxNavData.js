/**
 * Luxembourg fund NAV data - sourced from JP Morgan daily NAV report.
 * Original source: JP Morgan daily NAV report (lux.navproductionteam@jpmorgan.com).
 *
 * Last updated: 2026-08-04 (valuation date: 2026-08-03)
 */
const luxNavData = {
  valuationDate: '2026-08-03',
  lastUpdated: '2026-08-04T09:49:00',
  dataSource: 'JPM NAV Report',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 109.847, changePct: 1.8025, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 10995.761, changePct: 1.8041, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 213.332, changePct: 1.0603, isin: 'LU1932656777', taCode: 'SRAAJ' },
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 208.246, changePct: 1.0661, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 20649.946, changePct: 1.0672, isin: 'LU1932660886', taCode: 'SRAAL' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 211.660, changePct: 1.2913, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 162.481, changePct: 0.9016, isin: 'LU1932713917', taCode: 'SRAAF' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 165.370, changePct: 0.9094, isin: 'LU1932715532', taCode: 'SRAAG' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 227.238, changePct: 1.1001, isin: 'LU1932669598', taCode: 'SRAAN' },
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 212.628, changePct: 1.1019, isin: 'LU1932670927', taCode: 'SRAAO' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 21896.807, changePct: 1.1027, isin: 'LU1932673434', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 215.979, changePct: 1.3272, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 19912.861, changePct: 1.3276, isin: 'LU1932672030', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13574.728, changePct: 1.3280, isin: 'LU1932673608', taCode: 'SRAAW' },
      ],
    },
    {
      name: 'SKAGEN Focus Lux',
      shareClasses: [
        { label: 'SKAGEN FCS LUX A ACC EUR', ccy: 'EUR', nav: 200.368, changePct: 0.9089, isin: 'LU1932703363', taCode: 'SRAAD' },
        { label: 'SKAGEN FCS LUX B ACC EUR', ccy: 'EUR', nav: 200.996, changePct: 0.9175, isin: 'LU1932704841', taCode: 'SRAAE' },
      ],
    },
    {
      name: 'SKAGEN Kon-Tiki Lux',
      shareClasses: [
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 186.672, changePct: -0.3681, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 186.090, changePct: -0.3566, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 15243.062, changePct: -0.3578, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 159.083, changePct: -0.1346, isin: 'LU1932686766', taCode: 'SRAAC' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX I USD', ccy: 'USD', nav: 18519.792, changePct: -0.4938, isin: 'LU2660379376', taCode: 'SRAAV' },
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 172.783, changePct: -0.3467, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 172.929, changePct: -0.3461, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 17329.011, changePct: -0.3460, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
