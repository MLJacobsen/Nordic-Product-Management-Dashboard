/**
 * Revenue estimation for NO-domiciled funds.
 * Revenue = AUM (MNOK) x Ongoing Charge per year.
 * AUM from Snowflake (latest data through 2026-11-18; earlier dates noted per fund).
 */
export const revenueNoDataDate = '2026-11-18';
export const valuationDate = '2026-11-18';
export const lastUpdated = '2026-11-20T10:07:28+01:00';

const fundRevenue = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 67362, terPct: 0.25 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31230, terPct: 0.50 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31346, terPct: 1.00 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32900, terPct: 0.40 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26709, terPct: 0.75 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 28600, terPct: 0.20 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26861, terPct: 0.30 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23272, terPct: 0.20 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20522, terPct: 2.00 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 23147, terPct: 0.75 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20735, terPct: 0.25 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18640, terPct: 0.40 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17624, terPct: 0.15 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15620, terPct: 1.00 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12643, terPct: 0.75 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12226, terPct: 0.15 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9719, terPct: 0.40 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7710, terPct: 1.50 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6810, terPct: 0.40 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7837, terPct: 0.20 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7424, terPct: 0.30 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7648, terPct: 0.30 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6154, terPct: 0.40 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5530, terPct: 0.75 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5578, terPct: 0.40 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5181, terPct: 0.40 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3987, terPct: 1.50 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2992, terPct: 1.60 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3533, terPct: 1.20 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 897, terPct: 1.50 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5216, terPct: 1.21 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3636, terPct: 0.35 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2400, terPct: 1.50 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2404, terPct: 0.75 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1112, terPct: 1.05 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2441, terPct: 0.96 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1208, terPct: 1.55 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 1.11 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1169, terPct: 0.45 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1056, terPct: 0.80 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1020, terPct: 1.50 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 1.50 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1086, terPct: 0.80 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 963, terPct: 0.15 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 787, terPct: 1.50 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 885, terPct: 1.50 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 716, terPct: 1.50 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 750, terPct: 0.60 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 488, terPct: 1.00 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 0.98 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 0.80 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 0.80 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 0.67 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 470, terPct: 0.60 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 235, terPct: 0.20 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 168, terPct: 1.05 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 75, terPct: 1.05 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07', terPct: 0.53 },
];

export default fundRevenue.map((fund) => ({
  ...fund,
  estRevenueMillNok: (fund.aumMillNok * fund.terPct) / 100,
}));
