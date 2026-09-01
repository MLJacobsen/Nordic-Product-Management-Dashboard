/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-09-01
 * Last updated: 2026-09-01T10:04:00
 */
const seNavData = {
  valuationDate: '2026-09-01',
  lastUpdated: '2026-09-01T10:04:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 624.51, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.86, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 531.03, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1033.53, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 558.96, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 298.84, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 326.57, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 148.06, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 204.07, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 286.45, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 293.64, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 322.38, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 314.57, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 234.01, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.97, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 349.60, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.51, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 106.90, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 119.63, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 374.91, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 256.56, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 392.32, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 608.57, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.17, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.71, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 186.01, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.69, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 121.54, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.44, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 677.59, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 109.91, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 283.92, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 123.52, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 738.45, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 175.17, isin: 'SE0017485360' },
  ]
};

export default seNavData;
