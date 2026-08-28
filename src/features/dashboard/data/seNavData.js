/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-28
 * Last updated: 2026-08-28
 */
const seNavData = {
  valuationDate: '2026-08-28',
  lastUpdated: '2026-08-28T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 669.25, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 341.38, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 549.45, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1067.80, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 576.45, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 308.10, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 348.18, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.59, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 216.74, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 305.56, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 302.24, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 334.57, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 317.39, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 239.97, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 140.68, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 357.26, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 110.02, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 111.60, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 119.35, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 396.24, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 271.82, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 404.60, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 650.83, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 118.31, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 143.09, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 187.90, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 135.07, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 121.81, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 156.44, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 687.26, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 109.70, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 290.36, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 126.54, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 749.34, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 173.60, isin: 'SE0017485360' },
  ],
};

export default seNavData;
