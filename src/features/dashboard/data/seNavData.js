/**
 * Swedish fund NAV data — sourced from Snowflake (DWH_SAM.FUND_ADMIN.FACT_SH_HISTORIC_NAV).
 * Valuation date: 2026-08-24
 * Last updated: 2026-08-24T08:45:00
 */
const seNavData = {
  valuationDate: '2026-08-24',
  lastUpdated: '2026-08-24T08:45:00',
  dataSource: 'Snowflake',

  funds: [
    { name: 'GodFond Sverige & Världen', nav: 661.77, isin: 'SE0002800276' },
    { name: 'SPP Generation 40-tal', nav: 340.65, isin: 'SE0001095845' },
    { name: 'SPP Generation 50-tal', nav: 548.02, isin: 'SE0001095852' },
    { name: 'SPP Generation 60-tal', nav: 1062.09, isin: 'SE0001095860' },
    { name: 'SPP Generation 70-tal', nav: 571.21, isin: 'SE0001095878' },
    { name: 'SPP Generation 80-tal', nav: 305.09, isin: 'SE0000619355' },
    { name: 'SPP Mix 100', nav: 344.05, isin: 'SE0007279781' },
    { name: 'SPP Mix 20', nav: 156.07, isin: 'SE0007279757' },
    { name: 'SPP Mix 50', nav: 215.34, isin: 'SE0007279765' },
    { name: 'SPP Mix 80', nav: 302.68, isin: 'SE0007279773' },
    { name: 'Storebrand Emerging Markets', nav: 299.48, isin: 'SE0003455658' },
    { name: 'Storebrand Emerging Markets Plus', nav: 332.30, isin: 'SE0008129969' },
    { name: 'Storebrand Europa', nav: 317.00, isin: 'SE0000531881' },
    { name: 'Storebrand Europa Plus', nav: 239.70, isin: 'SE0010714113' },
    { name: 'Storebrand FRN Företagsobligation', nav: 140.60, isin: 'SE0004807097' },
    { name: 'Storebrand Global All Countries', nav: 353.50, isin: 'SE0000671919' },
    { name: 'Storebrand Global Corporate Bond IG 1-3Y', nav: 109.95, isin: 'SE0020844801' },
    { name: 'Storebrand Global Corporate Bond IG 4-6Y', nav: 111.42, isin: 'SE0010831578' },
    { name: 'Storebrand Global Developed Markets', nav: 118.07, isin: 'SE0026577900' },
    { name: 'Storebrand Global High Dividend Low Volatility', nav: 392.81, isin: 'SE0005224078' },
    { name: 'Storebrand Global Multifactor', nav: 268.05, isin: 'SE0011642958' },
    { name: 'Storebrand Global Plus', nav: 399.61, isin: 'SE0008129985' },
    { name: 'Storebrand Global Solutions', nav: 635.22, isin: 'SE0004576452' },
    { name: 'Storebrand Grön Obligation', nav: 118.36, isin: 'SE0006763967' },
    { name: 'Storebrand High Yield Företagsobligation', nav: 142.91, isin: 'SE0013877263' },
    { name: 'Storebrand Japan', nav: 185.05, isin: 'SE0000621393' },
    { name: 'Storebrand Kortränta', nav: 135.02, isin: 'SE0000522500' },
    { name: 'Storebrand Mix 120', nav: 120.28, isin: 'SE0026577736' },
    { name: 'Storebrand Obligation', nav: 156.40, isin: 'SE0000522518' },
    { name: 'Storebrand Sverige', nav: 679.43, isin: 'SE0000529992' },
    { name: 'Storebrand Sverige All Cap', nav: 108.58, isin: 'SE0026876831' },
    { name: 'Storebrand Sverige Plus', nav: 287.12, isin: 'SE0008964407' },
    { name: 'Storebrand Sverige Småbolag Plus', nav: 124.89, isin: 'SE0014808382' },
    { name: 'Storebrand USA', nav: 739.51, isin: 'SE0000594111' },
    { name: 'Storebrand USA Plus', nav: 171.18, isin: 'SE0017485360' },
  ],
};

export default seNavData;
