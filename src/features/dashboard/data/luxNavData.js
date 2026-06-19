/**
 * Luxembourg fund NAV data — sourced from Snowflake (DWH_SAM.PRICE.FACT_PRICE_DAILY).
 * Original source: JP Morgan daily NAV report (lux.navproductionteam@jpmorgan.com).
 * Snowflake loads this data with ~1 day lag.
 *
 * Auto-updated by the "Update LUX NAV data" Copilot workflow daily at 11:00.
 * Last updated: 2026-06-17
 */
const luxNavData = {
  valuationDate: '2026-06-17',
  lastUpdated: '2026-06-19T10:15:00',
  dataSource: 'snowflake',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 107.253, changePct: -1.2449, isin: 'LU3189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 10733.455, changePct: -1.2445, isin: 'LU3189577201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL B ACC EUR', ccy: 'EUR', nav: 201.63, changePct: -0.62, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 206.958, changePct: -0.5225, isin: 'LU1932658633', taCode: 'SRAAM' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 149.264, changePct: -1.6466, isin: 'LU1932713917', taCode: 'SRAAN' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 151.733, changePct: -1.6439, isin: 'LU1932715532', taCode: 'SRAAO' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX B ACC EUR', ccy: 'EUR', nav: 207.473, changePct: -0.6993, isin: 'LU1932670927', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 212.822, changePct: -0.6011, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 21363.194, changePct: -0.6987, isin: 'LU1932673434', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 13374.538, changePct: -0.601, isin: 'LU1932673608', taCode: 'SRAAW' },
      ],
    },
    {
      name: 'SKAGEN Kon-Tiki Lux',
      shareClasses: [
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 183.14, changePct: -0.3629, isin: 'LU1932684985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 182.24, changePct: -0.3587, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX B ACC GBP', ccy: 'GBP', nav: 157.329, changePct: -0.2606, isin: 'LU1932686766', taCode: 'SRAAC' },
        { label: 'SKAGEN KT LUX I2 ACC EUR', ccy: 'EUR', nav: 14930.851, changePct: -0.3593, isin: 'LU2962150319', taCode: 'SRAAX' },
        { label: 'SKAGEN KON-TIKI LUX I USD', ccy: 'USD', nav: 20017.518, changePct: 0.3644, isin: 'LU2660379376', taCode: 'SRAAV' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 187.393, changePct: 0.6186, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX H1 GBP', ccy: 'GBP', nav: 187.541, changePct: 0.6191, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 18791.98, changePct: 0.6189, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
