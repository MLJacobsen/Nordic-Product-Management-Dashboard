/**
 * Luxembourg fund NAV data.
 * Auto-updated from Snowflake DWH_SAM.PRICE.FACT_PRICE_DAILY.
 */

export const luxNavData = {
  valuationDate: "2026-08-25",
  lastUpdated: "2026-08-26T10:31:00+02:00",
  funds: [
    {
      name: "Storebrand Emerging Markets Plus",
      shareClasses: [
        { label: "B GBP", isin: "LU2658247064", currency: "GBP", nav: 175.09, changePct: 0.5623, taCode: "SEMP-B-GBP" },
        { label: "H1 GBP", isin: "LU2658246413", currency: "GBP", nav: 175.242, changePct: 0.5629, taCode: "SEMP-H1-GBP" },
        { label: "I GBP", isin: "LU2658246504", currency: "GBP", nav: 17561.922, changePct: 0.5631, taCode: "SEMP-I-GBP" },
        { label: "I USD", isin: "LU2660379376", currency: "USD", nav: 19041.974, changePct: 0.5555, taCode: "SEMP-I-USD" },
      ],
    },
    {
      name: "Storebrand Global Plus LUX",
      shareClasses: [
        { label: "B EUR", isin: "LU1932670927", currency: "EUR", nav: 212.933, changePct: 0.3866, taCode: "SGP-B-EUR" },
        { label: "B GBP", isin: "LU1932671149", currency: "GBP", nav: 216.059, changePct: 0.4244, taCode: "SGP-B-GBP" },
        { label: "I EUR", isin: "LU1932673434", currency: "EUR", nav: 21929.527, changePct: 0.3869, taCode: "SGP-I-EUR" },
        { label: "I GBP", isin: "LU1932673608", currency: "GBP", nav: 13580.542, changePct: 0.4244, taCode: "SGP-I-GBP" },
      ],
    },
    {
      name: "Storebrand Global Solutions LUX",
      shareClasses: [
        { label: "B EUR", isin: "LU1932658476", currency: "EUR", nav: 209.078, changePct: -0.0545, taCode: "SGS-B-EUR" },
        { label: "B GBP", isin: "LU1932658633", currency: "GBP", nav: 212.28, changePct: -0.0174, taCode: "SGS-B-GBP" },
      ],
    },
    {
      name: "Storebrand US Plus LUX",
      shareClasses: [
        { label: "B GBP", isin: "LU3189754693", currency: "GBP", nav: 109.181, changePct: 0.3142, taCode: "SUP-B-GBP" },
        { label: "F GBP", isin: "LU3189577201", currency: "GBP", nav: 10930.396, changePct: 0.3148, taCode: "SUP-F-GBP" },
      ],
    },
    {
      name: "Skagen Global LUX",
      shareClasses: [
        { label: "A EUR", isin: "LU1932713917", currency: "EUR", nav: 163.305, changePct: -0.7843, taCode: "SKG-A-EUR" },
        { label: "B EUR", isin: "LU1932715532", currency: "EUR", nav: 166.305, changePct: -0.7816, taCode: "SKG-B-EUR" },
      ],
    },
    {
      name: "Skagen Kon-Tiki LUX",
      shareClasses: [
        { label: "A EUR", isin: "LU1932684985", currency: "EUR", nav: 182.673, changePct: 0.7912, taCode: "SKT-A-EUR" },
        { label: "B EUR", isin: "LU1932686501", currency: "EUR", nav: 182.257, changePct: 0.7953, taCode: "SKT-B-EUR" },
        { label: "B GBP", isin: "LU1932686766", currency: "GBP", nav: 155.641, changePct: 0.8331, taCode: "SKT-B-GBP" },
        { label: "I2 EUR", isin: "LU2962150319", currency: "EUR", nav: 14927.656, changePct: 0.7946, taCode: "SKT-I2-EUR" },
      ],
    },
  ],
};
