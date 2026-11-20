/**
 * Luxembourg fund NAV data - sourced from Snowflake.
 * Share classes without query results retain JP Morgan NAVs from 2026-08-10.
 *
 * Last updated: 2026-11-20 (valuation date: 2026-11-18)
 */
const luxNavData = {
  valuationDate: '2026-11-18',
  lastUpdated: '2026-11-20T10:33:31+01:00',
  dataSource: 'Snowflake',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 108.156, changePct: 0.4691, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 10832.551, changePct: 0.4699, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 219.109, changePct: 0.0331, isin: 'LU1932656777', taCode: 'SRAAJ' },
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 206.673, changePct: 0.6908, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 21212.572, changePct: 0.0401, isin: 'LU1932660886', taCode: 'SRAAL' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 204.454, changePct: 0.7823, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 177.068, changePct: 0.0548, isin: 'LU1932713917', taCode: 'SRAAF' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 180.720, changePct: 0.0576, isin: 'LU1932715532', taCode: 'SRAAG' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 231.080, changePct: -0.1208, isin: 'LU1932669598', taCode: 'SRAAN' },
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 214.528, changePct: 0.1036, isin: 'LU1932670927', taCode: 'SRAAO' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 22098.899, changePct: 0.1038, isin: 'LU1932673434', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 212.093, changePct: 0.1951, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 20191.828, changePct: -0.3733, isin: 'LU1932672030', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13334.374, changePct: 0.1952, isin: 'LU1932673608', taCode: 'SRAAW' },
      ],
    },
    {
      name: 'SKAGEN Focus Lux',
      shareClasses: [
        { label: 'SKAGEN FCS LUX A ACC EUR', ccy: 'EUR', nav: 206.081, changePct: -0.1097, isin: 'LU1932703363', taCode: 'SRAAD' },
        { label: 'SKAGEN FCS LUX B ACC EUR', ccy: 'EUR', nav: 206.767, changePct: -0.1024, isin: 'LU1932704841', taCode: 'SRAAE' },
      ],
    },
    {
      name: 'SKAGEN Kon-Tiki Lux',
      shareClasses: [
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 178.179, changePct: -0.4820, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 178.356, changePct: -0.4776, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 14602.569, changePct: -0.4786, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 148.401, changePct: -0.3873, isin: 'LU1932686766', taCode: 'SRAAC' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX I USD', ccy: 'USD', nav: 16719.710, changePct: -0.0929, isin: 'LU2660379376', taCode: 'SRAAV' },
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 159.360, changePct: 0.3400, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 159.514, changePct: 0.3403, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 15987.487, changePct: 0.3401, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
