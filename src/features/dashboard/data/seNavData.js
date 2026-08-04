/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-04
 * Last updated: 2026-08-04T10:03:00
 */
const seNavData = {
  valuationDate: '2026-08-04',
  lastUpdated: '2026-08-04T10:03:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 606.09, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 327.55, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 526.69, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1017.33, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 544.78, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 290.85, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 316.87, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 146.90, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 200.72, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 279.32, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 282.17, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 310.47, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 305.56, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 227.47, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.58, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 338.57, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.39, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 106.87, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 115.84, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Vol', nav: 365.76, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 249.51, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 380.16, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 582.46, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.03, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.39, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 180.16, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.47, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 117.27, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.34, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 661.51, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 107.25, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 277.29, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 119.65, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 715.02, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 169.69, isin: 'SE0017485360' },
  ],
};

export default seNavData;
