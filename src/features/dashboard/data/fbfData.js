/**
 * FBF (Fondbolagens Förening) monthly statistics for Storebrand in Sweden.
 * Source: https://fondbolagen.se/ — Nysparande och förmögenhet 2026
 * Update monthly with latest figures (typically available 5th–15th).
 *
 * dataMonth: numeric month (1-12) of the latest data. Used by the UI to
 * show an "update needed" reminder between the 5th and 15th each month.
 */
const fbfData = {
  period: 'August 2026',
  dataMonth: 8, // 1=Jan … 12=Dec — update when new month is added
  dataYear: 2026,
  // NOTE: The Storebrand-specific figures below are ESTIMATES, not a genuine
  // per-company FBF source. The user's attached FBF Excel ("Nysparande och
  // förmögenhet 2026") only contains Swedish TOTAL MARKET fund flows by
  // category (Aktiefonder, Blandfonder, Långa/Korta räntefonder) — there is
  // no Storebrand-specific breakdown available from FBF. These figures are
  // rescaled using the same assumptions as the prior report (~5% of total
  // market net savings, ~2.1% of total market AUM) applied to the new
  // August 2026 total-market figures. A genuine per-company FBF export is
  // needed to replace these with real numbers.
  summary: `Net savings in August were positive for the Swedish fund market with 14.16 mdr SEK in net inflows (Aktiefonder +7.18bn, Blandfonder -0.63bn, Långa räntefonder +5.35bn, Korta räntefonder +2.26bn). Total market AUM was SEK 10,117.5 bn.

Total Storebrand Sweden (ESTIMATED — no per-company FBF source; rescaled from total-market figures using the same ~5% net savings / ~2.1% AUM assumptions as before)

Net savings for Storebrand ended at SEK 0.7 bn (estimated, ~5% of FBF total net savings of SEK 14.16 bn)

AUM for Storebrand is SEK 212.5 bn (estimated, 2.1% of FBF total AUM of SEK 10,117.5 bn)

Private Clients

Net savings and AUM for private clients at Storebrand are unchanged from the prior report (estimated) — not refreshed this cycle.`,

  monthlyHistory: [
    { month: 'Jan', netFlow: 0.8, marketShare: 1.5 },
    { month: 'Feb', netFlow: 1.1, marketShare: 1.7 },
    { month: 'Mar', netFlow: 0.6, marketShare: 1.2 },
    { month: 'Apr', netFlow: 1.2, marketShare: 1.8 },
    { month: 'May', netFlow: 1.5, marketShare: 2.1 },
    { month: 'Jun', netFlow: 1.8, marketShare: 2.2 },
    { month: 'Jul', netFlow: 1.4, marketShare: 5.0 },
    { month: 'Aug', netFlow: 0.7, marketShare: 5.0 },
  ],

  totals: {
    aum: 212.5,
    aumUnit: 'mdr SEK',
    marketShareAum: 2.1,
    netFlow: 0.7,
    netFlowUnit: 'mdr SEK',
    marketShareFlow: 5.0,
  },
};

export default fbfData;
