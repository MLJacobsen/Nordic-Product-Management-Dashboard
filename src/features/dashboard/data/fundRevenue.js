/**
 * Revenue estimation for NO-domiciled funds.
 * Revenue = AUM (MNOK) × Ongoing Charge per year.
 * Ongoing charges sourced from Snowflake DWH_SAM.CONFORMED_DIM.DIM_FUND (A share class).
 * AUM from Snowflake (live data as of 2026-06-17).
 *
 * Note: This is estimated annual revenue from ongoing charges only.
 * Actual revenue may differ due to performance fees, transaction fees, etc.
 */
export const revenueNoDataDate = '2026-07-31';

const fundRevenue = [
  // Storebrand Index Funds
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64082, terPct: 0.25 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26292, terPct: 0.30 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22133, terPct: 0.20 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9171, terPct: 0.40 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7545, terPct: 0.20 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7507, terPct: 0.30 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 191, terPct: 0.20 },

  // Storebrand Active Equity
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21197, terPct: 0.75 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17362, terPct: 0.40 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13061, terPct: 0.75 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8147, terPct: 0.40 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27237, terPct: 0.75 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3711, terPct: 1.50 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3031, terPct: 1.20 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2856, terPct: 1.50 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2028, terPct: 1.05 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2162, terPct: 1.50 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2095, terPct: 0.75 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1202, terPct: 0.45 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1092, terPct: 0.80 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 726, terPct: 1.50 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 184, terPct: 1.05 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 71, terPct: 1.05 },

  // Storebrand Fixed Income
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30743, terPct: 0.50 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29567, terPct: 0.40 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27852, terPct: 0.20 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17302, terPct: 0.25 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12232, terPct: 0.15 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7418, terPct: 0.30 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5836, terPct: 0.40 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5738, terPct: 0.75 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5651, terPct: 0.40 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5002, terPct: 0.40 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2624, terPct: 0.35 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 986, terPct: 0.15 },

  // Lifecycle Funds
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2880, terPct: 1.21 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1583, terPct: 0.96 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1369, terPct: 1.11 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 403, terPct: 0.80 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 302, terPct: 0.60 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16624, terPct: 0.15 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8507, terPct: 1.50 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1447, terPct: 1.55 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1099, terPct: 1.50 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 881, terPct: 1.50 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 516, terPct: 1.00 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30528, terPct: 1.00 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22804, terPct: 2.00 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15742, terPct: 1.00 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3190, terPct: 1.60 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1030, terPct: 1.50 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 968, terPct: 1.50 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1010, terPct: 0.80 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 717, terPct: 0.60 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 460, terPct: 0.98 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 459, terPct: 0.80 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 382, terPct: 0.67 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54, terPct: 0.53 },
];

// Calculate estimated annual revenue per fund
const fundRevenueWithCalc = fundRevenue.map((f) => ({
  ...f,
  estRevenueMillNok: (f.aumMillNok * f.terPct) / 100,
}));

export default fundRevenueWithCalc;
