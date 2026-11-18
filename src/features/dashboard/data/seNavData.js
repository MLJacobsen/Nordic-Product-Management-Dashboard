/**
 * Swedish fund NAV data ? sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-11-18
 * Last updated: 2026-11-18T10:08:26+01:00
 */
const seNavData = {
  valuationDate: '2026-11-18',
  lastUpdated: '2026-11-18T10:08:26+01:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 625.27, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.86, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 531.21, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1035.24, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 560.68, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 299.91, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 325.66, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.58, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 203.65, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 286.39, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 274.62, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 299.50, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 318.81, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 236.24, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 136.26, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 349.08, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 107.93, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 105.53, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 120.70, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 403.23, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 252.02, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 396.31, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 602.64, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 114.87, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.52, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 184.34, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.15, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 120.29, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.35, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 682.72, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 110.97, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 286.26, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 125.51, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 745.19, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 177.78, isin: 'SE0017485360' },
  ]
};

export default seNavData;
