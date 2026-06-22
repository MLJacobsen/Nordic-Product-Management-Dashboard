/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-06-20
 * Last updated: 2026-06-22
 */
const seNavData = {
  valuationDate: '2026-06-20',
  lastUpdated: '2026-06-22T16:10:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 604.33, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 328.97, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 528.79, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1019.84, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 545.08, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 290.70, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 318.62, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 147.52, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 201.49, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 280.40, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 303.08, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 336.02, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 302.97, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 225.45, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.15, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 340.81, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.41, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.70, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 115.77, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Vol', nav: 354.80, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 254.81, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 380.29, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 573.33, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.50, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 137.64, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 185.66, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.17, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 118.33, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 154.95, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 649.03, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 104.33, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 270.50, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 115.29, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 715.32, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 169.68, isin: 'SE0017485360' },
  ],
};

export default seNavData;
