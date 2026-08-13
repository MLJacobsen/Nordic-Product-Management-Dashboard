/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-13
 * Last updated: 2026-08-13
 */
const seNavData = {
  valuationDate: '2026-08-13',
  lastUpdated: '2026-08-13T10:00:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 666.44, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 340.96, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 548.77, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1066.09, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 575.02, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 307.29, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 347.75, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.50, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 216.52, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 305.07, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 295.65, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 328.73, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 317.71, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 240.30, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 140.45, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 357.27, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 109.99, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 111.71, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 119.65, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 394.44, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 273.74, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 405.92, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 649.35, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 118.26, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 143.01, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 190.22, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.93, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 121.74, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 156.45, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 680.69, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 108.69, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 287.20, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 124.50, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 751.58, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 174.15, isin: 'SE0017485360' },
  ],
};

export default seNavData;
