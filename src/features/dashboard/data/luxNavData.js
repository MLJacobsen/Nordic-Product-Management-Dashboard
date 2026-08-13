/**
 * Luxembourg fund NAV data - sourced from JP Morgan daily NAV report.
 * Original source: JP Morgan daily NAV report (lux.navproductionteam@jpmorgan.com).
 *
 * Last updated: 2026-08-13 (valuation date: 2026-08-11)
 */
const luxNavData = {
  valuationDate: '2026-08-11',
  lastUpdated: '2026-08-13T10:32:00',
  dataSource: 'JPM NAV Report',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 111.163, changePct: -0.2799, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 11127.948, changePct: -0.2799, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 219.109, changePct: 0.0331, isin: 'LU1932656777', taCode: 'SRAAJ' },
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 214.457, changePct: 0.2543, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 21212.572, changePct: 0.0401, isin: 'LU1932660886', taCode: 'SRAAL' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 217.364, changePct: 0.2652, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 162.422, changePct: 0.1838, isin: 'LU1932713917', taCode: 'SRAAF' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 165.345, changePct: 0.1866, isin: 'LU1932715532', taCode: 'SRAAG' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 231.080, changePct: -0.1208, isin: 'LU1932669598', taCode: 'SRAAN' },
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 215.940, changePct: -0.1355, isin: 'LU1932670927', taCode: 'SRAAO' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 22238.366, changePct: -0.1352, isin: 'LU1932673434', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 218.730, changePct: -0.1242, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 20191.828, changePct: -0.3733, isin: 'LU1932672030', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13747.958, changePct: -0.1237, isin: 'LU1932673608', taCode: 'SRAAW' },
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
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 184.670, changePct: -0.6681, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 184.151, changePct: -0.6640, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 15083.688, changePct: -0.6644, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 156.985, changePct: -0.6531, isin: 'LU1932686766', taCode: 'SRAAC' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX I USD', ccy: 'USD', nav: 18678.728, changePct: -0.2025, isin: 'LU2660379376', taCode: 'SRAAV' },
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 173.346, changePct: -0.1181, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 173.494, changePct: -0.1174, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 17386.043, changePct: -0.1173, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
