/**
 * Revenue estimation for NO-domiciled funds.
 * Revenue = AUM (MNOK) × Management Fee (TER) per year.
 * TER sourced from fund prospectuses / KIID documents.
 * AUM from Snowflake (live data as of 2026-06-17).
 *
 * Note: This is estimated annual revenue from management fees only.
 * Actual revenue may differ due to performance fees, transaction fees, etc.
 */
const fundRevenue = [
  // Storebrand Index Funds
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 63591, terPct: 0.20 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 25714, terPct: 0.20 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 19477, terPct: 0.20 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9749, terPct: 0.35 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7544, terPct: 0.22 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7304, terPct: 0.22 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 179, terPct: 0.20 },

  // Storebrand Active Equity
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 19121, terPct: 0.75 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17803, terPct: 0.40 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12889, terPct: 0.75 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8608, terPct: 0.75 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27507, terPct: 0.40 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3634, terPct: 1.50 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2757, terPct: 1.20 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2634, terPct: 1.00 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2336, terPct: 1.50 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2059, terPct: 1.20 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 1948, terPct: 1.20 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1150, terPct: 0.75 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1057, terPct: 0.40 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 757, terPct: 1.50 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 185, terPct: 1.50 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 58, terPct: 1.50 },

  // Storebrand Fixed Income
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 29537, terPct: 0.35 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 28848, terPct: 0.30 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27318, terPct: 0.10 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17118, terPct: 0.25 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 11750, terPct: 0.15 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 6682, terPct: 0.30 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5622, terPct: 0.50 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5487, terPct: 0.80 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5157, terPct: 0.40 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4942, terPct: 0.50 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2451, terPct: 0.35 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 1083, terPct: 0.15 },

  // Lifecycle Funds
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2909, terPct: 0.80 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1589, terPct: 0.70 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1342, terPct: 0.75 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 400, terPct: 0.60 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 296, terPct: 0.50 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 15968, terPct: 0.19 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8958, terPct: 1.50 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1531, terPct: 1.50 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1143, terPct: 1.50 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 881, terPct: 1.50 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 524, terPct: 1.20 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 29037, terPct: 1.00 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22710, terPct: 2.00 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15442, terPct: 1.50 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3301, terPct: 1.50 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1044, terPct: 0.60 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 987, terPct: 1.50 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 948, terPct: 1.00 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 673, terPct: 1.00 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 457, terPct: 0.50 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 454, terPct: 0.55 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 379, terPct: 0.45 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 53, terPct: 0.40 },

  // Other
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 933, terPct: 0.10 },
];

// Calculate estimated annual revenue per fund
const fundRevenueWithCalc = fundRevenue.map((f) => ({
  ...f,
  estRevenueMillNok: (f.aumMillNok * f.terPct) / 100,
}));

export default fundRevenueWithCalc;
