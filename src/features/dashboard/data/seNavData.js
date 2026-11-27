/**
 * Swedish fund NAV data ? sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-11-27
 * Last updated: 2026-11-27T10:04:44+01:00
 */
const seNavData = {
  valuationDate: '2026-11-27',
  lastUpdated: '2026-11-27T10:04:44+01:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 611.12, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.24, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 529.64, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1024.71, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 549.65, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 293.52, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 316.43, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.17, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 201.16, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 280.16, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 266.03, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 288.83, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 309.39, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 229.23, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 136.35, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 342.09, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.20, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 106.07, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 118.59, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 404.51, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 246.70, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 389.48, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 585.74, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.44, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.58, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 180.51, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.27, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 115.88, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 154.40, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 666.69, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 108.64, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 280.28, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 124.71, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 736.08, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 175.81, isin: 'SE0017485360' },
  ]
};

export default seNavData;
