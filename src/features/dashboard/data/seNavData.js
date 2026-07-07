/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-07-07
 * Last updated: 2026-07-07T10:01:00
 */
const seNavData = {
  valuationDate: '2026-07-07',
  lastUpdated: '2026-07-07T10:01:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & VÃ¤rlden', nav: 657.68, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 341.76, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 549.53, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1062.79, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 570.27, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 304.31, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 344.54, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.49, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 215.66, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 302.85, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 305.02, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 338.81, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 315.37, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 238.3, isin: 'SE0010714113' },
    { name: 'Storebrand FRN FÃ¶retagsobligation', nav: 139.94, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 353.81, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 109.87, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 112.33, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 117.86, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 385.01, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 270.9, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 400.32, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 628.93, isin: 'SE0004576452' },
    { name: 'Storebrand GrÃ¶n Obligation', nav: 118.81, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield FÃ¶retagsobligation', nav: 142.3, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 189.46, isin: 'SE0000621393' },
    { name: 'Storebrand KortrÃ¤nta', nav: 134.69, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 120.32, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 158.08, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 671.83, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 106.69, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 282.74, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige SmÃ¥bolag Plus', nav: 122.73, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 741.29, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 171.53, isin: 'SE0017485360' },
  ],
};

export default seNavData;
