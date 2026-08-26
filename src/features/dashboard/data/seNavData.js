/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-26
 * Last updated: 2026-08-26
 */
const seNavData = {
  valuationDate: '2026-08-26',
  lastUpdated: '2026-08-26T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 615.47, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.13, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 529.51, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1026.39, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 552.17, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 294.94, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 321.50, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.61, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.49, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 282.91, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 286.34, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 314.72, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 312.95, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 232.41, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.92, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 344.61, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.64, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.02, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 118.07, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 372.39, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 252.30, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 386.77, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 596.59, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.32, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.60, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 182.17, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.67, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 119.45, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.67, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 667.78, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 108.35, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 279.72, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 121.07, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 727.60, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 172.70, isin: 'SE0017485360' },
  ],
};

export default seNavData;
