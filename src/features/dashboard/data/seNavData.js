/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-10
 * Last updated: 2026-08-10T10:02:00
 */
const seNavData = {
  valuationDate: '2026-08-10',
  lastUpdated: '2026-08-10T10:02:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 618.32, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.26, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 529.8, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1028.09, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 553.84, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 295.99, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 322.72, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.73, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.84, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 283.59, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 280.81, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 308.8, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 309.43, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 230.13, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation A SEK H', nav: 135.67, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 344.05, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y A SEK H', nav: 108.57, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y A SEK H', nav: 107.28, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 118.18, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 370.87, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 254.88, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 388.22, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 593.49, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation A SEK H', nav: 115.22, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation A SEK H', nav: 138.53, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 183.36, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta A SEK H', nav: 133.51, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 120.07, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.77, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 676.21, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 109.5, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 282.83, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 121.53, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 731.82, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 173.99, isin: 'SE0017485360' },
  ],
};

export default seNavData;
