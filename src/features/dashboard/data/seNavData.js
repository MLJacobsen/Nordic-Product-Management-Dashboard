/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-06-30
 * Last updated: 2026-07-01
 */
const seNavData = {
  valuationDate: '2026-06-30',
  lastUpdated: '2026-07-01T10:35:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 606.20, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 330.06, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 530.51, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1023.19, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 546.98, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 291.70, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 319.87, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.96, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 202.11, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 281.22, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 294.51, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 325.57, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 306.94, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 228.68, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.25, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 342.73, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.62, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 108.06, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 116.87, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 361.66, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 258.55, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 385.05, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 581.16, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.94, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 137.91, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 183.38, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.27, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 118.34, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 155.97, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 647.57, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 103.96, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 269.58, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 115.91, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 724.69, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 172.04, isin: 'SE0017485360' },
  ],
};

export default seNavData;
