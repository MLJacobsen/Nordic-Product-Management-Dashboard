/**
 * Swedish fund NAV data ? sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-26 (some funds Aug 25)
 * Last updated: 2026-08-28T12:12:00
 */
const seNavData = {
  valuationDate: '2026-08-26',
  lastUpdated: '2026-08-28T12:12:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 621.31, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 330.06, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 531.19, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1031.70, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 556.54, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 297.41, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 324.69, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 148.06, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.88, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 283.60, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 291.87, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 320.37, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 314.64, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 233.90, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.95, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 347.35, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.71, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.19, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 118.83, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 374.54, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 256.08, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 389.70, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 598.52, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.41, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.68, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 184.76, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.69, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 120.72, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.97, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 675.36, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 109.22, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 282.06, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 121.97, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 727.78, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 172.76, isin: 'SE0017485360' },
  ]
};

export default seNavData;
