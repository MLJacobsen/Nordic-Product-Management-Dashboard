/**
 * Luxembourg fund NAV data — sourced from JP Morgan daily NAV report.
 * Original source: JP Morgan daily NAV report (lux.navproductionteam@jpmorgan.com).
 *
 * Last updated: 2026-06-30 (valuation date: 2026-06-26)
 */
const luxNavData = {
  valuationDate: '2026-06-26',
  lastUpdated: '2026-06-30T10:31:00',
  dataSource: 'Snowflake DWH_SAM',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 108.084, changePct: -0.0989, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 10817.138, changePct: -0.0983, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 209.152, changePct: 0.3868, isin: 'LU1932656777', taCode: 'SRAAJ' },
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 201.749, changePct: -0.4264, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 20226.345, changePct: 0.397, isin: 'LU1932660886', taCode: 'SRAAL' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 206.597, changePct: -0.2193, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 149.624, changePct: 0.7752, isin: 'LU1932713917', taCode: 'SRAAF' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 152.135, changePct: 0.7777, isin: 'LU1932715532', taCode: 'SRAAG' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 225.712, changePct: 0.2191, isin: 'LU1932669598', taCode: 'SRAAN' },
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 208.484, changePct: -0.4455, isin: 'LU1932670927', taCode: 'SRAAO' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 21467.801, changePct: -0.4453, isin: 'LU1932673434', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 213.36, changePct: -0.2385, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 19914.065, changePct: -0.2135, isin: 'LU1932672030', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13408.709, changePct: -0.238, isin: 'LU1932673608', taCode: 'SRAAW' },
      ],
    },
    {
      name: 'SKAGEN Focus Lux',
      shareClasses: [
        { label: 'SKAGEN FCS LUX A ACC EUR', ccy: 'EUR', nav: 198.087, changePct: -0.8195, isin: 'LU1932703363', taCode: 'SRAAD' },
        { label: 'SKAGEN FCS LUX B ACC EUR', ccy: 'EUR', nav: 198.500, changePct: -0.8121, isin: 'LU1932704841', taCode: 'SRAAE' },
      ],
    },
    {
      name: 'SKAGEN Kon-Tiki Lux',
      shareClasses: [
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 175.355, changePct: -1.7845, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 174.554, changePct: -1.7803, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 14300.517, changePct: -1.7806, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 150.342, changePct: -1.5758, isin: 'LU1932686766', taCode: 'SRAAC' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX I USD', ccy: 'USD', nav: 19074.198, changePct: -3.009, isin: 'LU2660379376', taCode: 'SRAAV' },
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 181.183, changePct: -2.9649, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 181.328, changePct: -2.9652, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 18169.647, changePct: -2.9648, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
