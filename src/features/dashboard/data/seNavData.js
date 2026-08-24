/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-24
 * Last updated: 2026-08-24
 */
const seNavData = {
  valuationDate: '2026-08-24',
  lastUpdated: '2026-08-24T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 611.03, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 328.69, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 528.68, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1023.10, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 549.19, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 293.23, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 320.13, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.48, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.00, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 281.77, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 286.78, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 315.57, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 310.14, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 230.74, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.86, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 343.12, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.73, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.05, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 117.48, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 369.07, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 252.08, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 384.95, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 593.76, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.32, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.51, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 182.45, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.64, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 118.80, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.68, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 660.89, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 107.48, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 277.09, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 120.18, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 724.48, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 172.03, isin: 'SE0017485360' },
  ],
};

export default seNavData;
