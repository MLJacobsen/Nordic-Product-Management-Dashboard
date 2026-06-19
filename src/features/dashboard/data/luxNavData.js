/**
 * Luxembourg fund NAV data from JP Morgan daily report.
 * Source: lux.navproductionteam@jpmorgan.com (daily ~10 AM)
 * File: Storebrand_NAV
 *
 * Update this file daily when the NAV report arrives.
 * Last updated: 2026-06-17
 */
const luxNavData = {
  valuationDate: '2026-06-17',
  lastUpdated: '2026-06-17T10:00:00',

  funds: [
    {
      name: 'Storebrand US Plus Lux',
      shareClasses: [
        { label: 'STB US PLUS LUX B ACC GBP', ccy: 'GBP', nav: 197.253, changePct: -1.245, isin: 'LU1189754693', taCode: 'SRABE' },
        { label: 'STB US PLUS LUX F ACC GBP', ccy: 'GBP', nav: 10733.455, changePct: -1.2445, isin: 'LU1895772201', taCode: 'SRAAZ' },
      ],
    },
    {
      name: 'Storebrand Global Solutions Lux',
      shareClasses: [
        { label: 'STB GL SOL A ACC EUR', ccy: 'EUR', nav: 206.737, changePct: -0.6223, isin: 'LU1932658476', taCode: 'SRAAK' },
        { label: 'STB GL SOL A ACC EUR (2)', ccy: 'EUR', nav: 201.63, changePct: -0.6202, isin: 'LU1932660836', taCode: 'SRAAL' },
        { label: 'STB GL SOL I ACC EUR', ccy: 'EUR', nav: 19990.317, changePct: -0.6198, isin: 'LU1932658633', taCode: 'SRAAM' },
        { label: 'STB GL SOL B ACC GBP', ccy: 'GBP', nav: 206.958, changePct: -0.5224, isin: 'LU1932659877', taCode: 'SRAAF' },
      ],
    },
    {
      name: 'SKAGEN Global Lux',
      shareClasses: [
        { label: 'SKAGEN GL LUX A ACC EUR', ccy: 'EUR', nav: 149.264, changePct: -1.6466, isin: 'LU1932713917', taCode: 'SRAAN' },
        { label: 'SKAGEN GL LUX B ACC EUR', ccy: 'EUR', nav: 151.733, changePct: -1.6442, isin: 'LU1932715532', taCode: 'SRAAO' },
      ],
    },
    {
      name: 'Storebrand Global Plus Lux',
      shareClasses: [
        { label: 'STB GL PLS LUX A ACC EUR', ccy: 'EUR', nav: 221.797, changePct: -0.6993, isin: 'LU1932670927', taCode: 'SRAAP' },
        { label: 'STB GL PLS LUX I ACC EUR', ccy: 'EUR', nav: 21363.194, changePct: -0.6987, isin: 'LU1932671149', taCode: 'SRAAQ' },
        { label: 'STB GL PLS LUX B ACC GBP', ccy: 'GBP', nav: 212.822, changePct: -0.6011, isin: 'LU1932673434', taCode: 'SRAAR' },
        { label: 'STB GL PLS LUX H ACC GBP', ccy: 'GBP', nav: 13374.538, changePct: -0.6014, isin: 'LU1932673608', taCode: 'SRAAW' },
        { label: 'STB GL PLS LUX I ACC GBP', ccy: 'GBP', nav: 1620.133, changePct: -1.0052, isin: 'LU1932703631', taCode: 'SRAAD' },
      ],
    },
    {
      name: 'SKAGEN Focus Lux',
      shareClasses: [
        { label: 'SKAGEN FCS LUX A ACC EUR', ccy: 'EUR', nav: 203.181, changePct: -1.0936, isin: 'LU1962150319', taCode: 'SRAAX' },
      ],
    },
    {
      name: 'SKAGEN Kon-Tiki Lux',
      shareClasses: [
        { label: 'SKAGEN KT LUX A ACC EUR', ccy: 'EUR', nav: 183.14, changePct: -0.3627, isin: 'LU1932664985', taCode: 'SRAAA' },
        { label: 'SKAGEN KT LUX B ACC EUR', ccy: 'EUR', nav: 182.24, changePct: -0.3589, isin: 'LU1932686501', taCode: 'SRAAB' },
        { label: 'SKAGEN KT LUX I 2 ACC EUR', ccy: 'EUR', nav: 14930.851, changePct: -0.3593, isin: 'LU1932686766', taCode: 'SRAAC' },
        { label: 'SKAGEN KON-TIKI LUX I USD', ccy: 'USD', nav: 20017.518, changePct: -0.3644, isin: 'LU2660379376', taCode: 'SRAAV' },
      ],
    },
    {
      name: 'Storebrand Emerging Markets Plus Lux',
      shareClasses: [
        { label: 'STB EM PLS LUX B GBP', ccy: 'GBP', nav: 187.393, changePct: -0.6138, isin: 'LU2658247064', taCode: 'SRAAS' },
        { label: 'STB EM PLS LUX I GBP', ccy: 'GBP', nav: 187.541, changePct: -0.6193, isin: 'LU2658246413', taCode: 'SRAAT' },
        { label: 'STB EM PLS LUX I GBP (2)', ccy: 'GBP', nav: 15701.98, changePct: -0.6189, isin: 'LU2658246504', taCode: 'SRAAU' },
      ],
    },
  ],
};

export default luxNavData;
