/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-07-01
 * Last updated: 2026-07-01
 */
const seNavData = {
  valuationDate: '2026-07-01',
  lastUpdated: '2026-07-01T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 654.79, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 341.62, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 549.19, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1060.52, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 567.86, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 302.88, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 343.18, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.40, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 215.13, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 301.54, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 306.04, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 341.11, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 313.36, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 237.26, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 139.86, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 352.17, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 109.84, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 112.45, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 117.14, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Vol', nav: 381.56, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 274.19, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 398.74, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 620.96, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 118.89, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 142.52, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 185.94, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 134.65, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 119.55, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 158.54, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 665.87, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 105.14, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 279.43, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 120.08, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 738.42, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 171.03, isin: 'SE0017485360' },
  ],
};

export default seNavData;
