/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-07-06
 * Last updated: 2026-07-06
 */
const seNavData = {
  valuationDate: '2026-07-06',
  lastUpdated: '2026-07-06T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 607.86, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.97, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 530.40, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1023.63, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 547.70, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 292.12, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 319.87, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.82, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.10, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 281.49, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 289.12, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 318.90, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 309.91, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 230.62, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.29, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 341.96, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.61, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.90, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 116.88, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 364.03, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 254.17, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 384.39, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 584.54, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.88, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 137.97, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 183.89, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.29, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 118.61, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 155.52, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 656.00, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 105.83, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 273.86, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 118.52, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 723.41, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 171.69, isin: 'SE0017485360' },
  ],
};

export default seNavData;
