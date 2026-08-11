/**
 * Luxembourg fund NAV data - sourced from JP Morgan daily NAV report.
 * Original source: JP Morgan daily NAV report (lux.navproductionteam@jpmorgan.com).
 *
 * Last updated: 2026-08-11 (valuation date: 2026-08-10)
 */
const luxNavData = {
  valuationDate: '2026-08-10',
  lastUpdated: '2026-08-11T09:48:00',
  dataSource: 'JPM NAV Report',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 111.475, changePct: -0.4282, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 11159.187, changePct: -0.4266, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 219.109, changePct: 0.0331, isin: 'LU1932656777', taCode: 'SRAAJ' },
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 213.913, changePct: 0.0389, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 21212.572, changePct: 0.0401, isin: 'LU1932660886', taCode: 'SRAAL' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 216.789, changePct: -0.2157, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 162.124, changePct: 0.1683, isin: 'LU1932713917', taCode: 'SRAAF' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 165.037, changePct: 0.1761, isin: 'LU1932715532', taCode: 'SRAAG' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 231.080, changePct: -0.1208, isin: 'LU1932669598', taCode: 'SRAAN' },
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 216.233, changePct: -0.1196, isin: 'LU1932670927', taCode: 'SRAAO' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 22268.481, changePct: -0.1187, isin: 'LU1932673434', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 219.002, changePct: -0.3739, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 20191.828, changePct: -0.3733, isin: 'LU1932672030', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13764.992, changePct: -0.3730, isin: 'LU1932673608', taCode: 'SRAAW' },
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
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 185.912, changePct: 0.2389, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 185.382, changePct: 0.2504, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 15184.581, changePct: 0.2491, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 158.017, changePct: -0.0048, isin: 'LU1932686766', taCode: 'SRAAC' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX I USD', ccy: 'USD', nav: 18716.624, changePct: 0.8009, isin: 'LU2660379376', taCode: 'SRAAV' },
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 173.551, changePct: 0.5652, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 173.698, changePct: 0.5657, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 17406.456, changePct: 0.5662, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
