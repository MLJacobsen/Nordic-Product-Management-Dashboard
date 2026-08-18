/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-18
 * Last updated: 2026-08-18T10:05:00
 */
const seNavData = {
  valuationDate: '2026-08-18',
  lastUpdated: '2026-08-18T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 618.32, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.50, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 530.31, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1030.06, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 555.41, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 296.80, isin: 'SE0000619355' },
    { name: 'Storebrand Emerging Markets A SEK', nav: 288.44, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus A SEK', nav: 318.33, isin: 'SE0008129969' },
    { name: 'Storebrand Europa A SEK', nav: 311.68, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus A SEK', nav: 231.87, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.79, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries A SEK', nav: 348.76, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y A SEK H', nav: 108.69, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y A SEK H', nav: 107.21, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets A SEK', nav: 119.56, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility A SEK', nav: 372.04, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor A SEK', nav: 260.59, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus A SEK', nav: 392.45, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions A SEK', nav: 608.13, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.30, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.69, isin: 'SE0013877263' },
    { name: 'Storebrand Japan A SEK', nav: 189.29, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.58, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 100', nav: 325.50, isin: 'SE0007279781' },
    { name: 'Storebrand Mix 120', nav: 121.14, isin: 'SE0026577736' },
    { name: 'Storebrand Mix 20', nav: 148.10, isin: 'SE0007279757' },
    { name: 'Storebrand Mix 50', nav: 203.75, isin: 'SE0007279765' },
    { name: 'Storebrand Mix 80', nav: 285.37, isin: 'SE0007279773' },
    { name: 'Storebrand Obligation A SEK', nav: 153.73, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige A SEK', nav: 665.77, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap A SEK', nav: 108.23, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus A SEK', nav: 278.83, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 121.01, isin: 'SE0014808382' },
    { name: 'Storebrand USA A SEK', nav: 739.31, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus A SEK', nav: 175.66, isin: 'SE0017485360' },
  ],
}};

export default seNavData;
