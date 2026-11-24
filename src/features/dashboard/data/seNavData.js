/**
 * Swedish fund NAV data ? sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-11-24
 * Last updated: 2026-11-24T10:03:10+01:00
 */
const seNavData = {
  valuationDate: '2026-11-24',
  lastUpdated: '2026-11-24T10:03:10+01:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 594.02, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 326.92, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 525.34, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1008.93, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 535.93, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 285.68, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 308.53, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 146.13, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 198.35, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 274.33, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 261.43, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 284.36, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 304.19, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 225.45, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 136.29, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 330.76, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.19, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 105.86, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 114.34, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 390.19, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 238.17, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 375.79, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 578.07, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.32, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.99, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 177.11, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.23, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 112.41, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 154.22, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 650.08, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 105.77, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 272.85, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 120.76, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 703.69, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 167.70, isin: 'SE0017485360' },
  ]
};

export default seNavData;
