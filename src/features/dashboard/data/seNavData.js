/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-14
 * Last updated: 2026-08-14
 */
const seNavData = {
  valuationDate: '2026-08-14',
  lastUpdated: '2026-08-14T10:05:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 620.19, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 329.62, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 530.51, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1030.61, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 555.89, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 297.06, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 325.26, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 148.09, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 203.72, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 285.34, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 285.81, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 315.11, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 312.38, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 232.48, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 135.76, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 348.31, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 108.67, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 107.27, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 119.52, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 371.75, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 258.38, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 392.42, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 609.43, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 115.29, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 138.66, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 187.03, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 133.56, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 121.10, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 153.82, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 669.27, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 108.60, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 280.00, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 120.93, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 738.97, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 175.72, isin: 'SE0017485360' },
  ],
};

export default seNavData;
