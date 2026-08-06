/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-06
 * Last updated: 2026-08-06
 */
const seNavData = {
  valuationDate: '2026-08-06',
  lastUpdated: '2026-08-06T10:04:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 387.95, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 268.03, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 417.61, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 695.08, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 330.08, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 174.08, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 209.08, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 121.66, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 150.07, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 187.67, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 159.57, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 182.35, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 175.07, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 160.76, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 131.97, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 198.45, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: null, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 95.54, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: null, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 359.82, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 152.00, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 236.53, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 413.44, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 103.59, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 107.43, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 123.76, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 119.54, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: null, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.82, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 415.78, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: null, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 235.86, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 99.07, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 417.06, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 105.18, isin: 'SE0017485360' },
  ],
};

export default seNavData;
