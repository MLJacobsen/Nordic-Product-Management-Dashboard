/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-07-03
 * Last updated: 2026-07-03T10:01:00
 */
const seNavData = {
  valuationDate: '2026-07-03',
  lastUpdated: '2026-07-03T10:01:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 653.73, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 341.46, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 548.96, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1060.20, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 567.72, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 302.84, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 343.29, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.33, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 215.14, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 301.67, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 306.94, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 342.05, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 312.54, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 236.16, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 139.89, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 353.00, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 109.86, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 112.27, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 117.43, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 384.40, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 273.36, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 399.64, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 622.65, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 118.83, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 142.20, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 187.72, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.65, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 119.58, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 158.30, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 662.75, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 104.88, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 278.56, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 120.46, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 740.96, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 171.54, isin: 'SE0017485360' },
  ],
};

export default seNavData;
