/**
 * Luxembourg fund NAV data sourced from Snowflake (DWH_SAM.PRICE).
 * Auto-updated by the LUX NAV update workflow.
 */

export const luxNavData = {
  valuationDate: "2026-06-17",
  lastUpdated: "2026-06-19T10:30:00+02:00",
  funds: [
    {
      name: "Storebrand Global Plus LUX",
      shareClasses: [
        {
          label: "B EUR",
          isin: "LU1932670927",
          currency: "EUR",
          nav: 207.473,
          changePct: -0.6993,
          taCode: "SGPBE"
        },
        {
          label: "B GBP",
          isin: "LU1932671149",
          currency: "GBP",
          nav: 212.822,
          changePct: -0.6011,
          taCode: "SGPBG"
        },
        {
          label: "I EUR",
          isin: "LU1932673434",
          currency: "EUR",
          nav: 21363.194,
          changePct: -0.6987,
          taCode: "SGPIE"
        },
        {
          label: "I GBP",
          isin: "LU1932673608",
          currency: "GBP",
          nav: 13374.538,
          changePct: -0.601,
          taCode: "SGPIG"
        }
      ]
    },
    {
      name: "Storebrand Global Solutions LUX",
      shareClasses: [
        {
          label: "B EUR",
          isin: "LU1932658476",
          currency: "EUR",
          nav: 201.63,
          changePct: -0.62,
          taCode: "SGSBE"
        },
        {
          label: "B GBP",
          isin: "LU1932658633",
          currency: "GBP",
          nav: 206.958,
          changePct: -0.5225,
          taCode: "SGSBG"
        }
      ]
    },
    {
      name: "Storebrand Emerging Markets Plus",
      shareClasses: [
        {
          label: "B GBP",
          isin: "LU2658247064",
          currency: "GBP",
          nav: 187.393,
          changePct: 0.6186,
          taCode: "SEMPBG"
        },
        {
          label: "H1 GBP",
          isin: "LU2658246413",
          currency: "GBP",
          nav: 187.541,
          changePct: 0.6191,
          taCode: "SEMPH1G"
        },
        {
          label: "I GBP",
          isin: "LU2658246504",
          currency: "GBP",
          nav: 18791.98,
          changePct: 0.6189,
          taCode: "SEMPIG"
        },
        {
          label: "I USD",
          isin: "LU2660379376",
          currency: "USD",
          nav: 20017.518,
          changePct: 0.3644,
          taCode: "SEMPIU"
        }
      ]
    },
    {
      name: "Storebrand US Plus LUX",
      shareClasses: [
        {
          label: "B GBP",
          isin: "LU3189754693",
          currency: "GBP",
          nav: 107.253,
          changePct: -1.2449,
          taCode: "SUSPBG"
        },
        {
          label: "F GBP",
          isin: "LU3189577201",
          currency: "GBP",
          nav: 10733.455,
          changePct: -1.2445,
          taCode: "SUSPFG"
        }
      ]
    },
    {
      name: "Skagen Global LUX",
      shareClasses: [
        {
          label: "A EUR",
          isin: "LU1932713917",
          currency: "EUR",
          nav: 149.264,
          changePct: -1.6466,
          taCode: "SKGLAE"
        },
        {
          label: "B EUR",
          isin: "LU1932715532",
          currency: "EUR",
          nav: 151.733,
          changePct: -1.6439,
          taCode: "SKGLBE"
        }
      ]
    },
    {
      name: "Skagen Kon-Tiki LUX",
      shareClasses: [
        {
          label: "A EUR",
          isin: "LU1932684985",
          currency: "EUR",
          nav: 183.14,
          changePct: -0.3629,
          taCode: "SKKTAE"
        },
        {
          label: "B EUR",
          isin: "LU1932686501",
          currency: "EUR",
          nav: 182.24,
          changePct: -0.3587,
          taCode: "SKKTBE"
        },
        {
          label: "B GBP",
          isin: "LU1932686766",
          currency: "GBP",
          nav: 157.329,
          changePct: -0.2606,
          taCode: "SKKTBG"
        },
        {
          label: "I2 EUR",
          isin: "LU2962150319",
          currency: "EUR",
          nav: 14930.851,
          changePct: -0.3593,
          taCode: "SKKTI2E"
        }
      ]
    }
  ]
};
