/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-06-17';

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 63591 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 29537 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 28848 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27507 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27318 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 25714 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 19477 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 19121 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17803 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17118 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12889 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 11750 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9749 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8608 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7544 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7304 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 6682 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5622 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5487 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5157 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4942 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3634 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2909 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2757 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2634 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2451 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2336 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2059 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 1948 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1589 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1342 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1150 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 1083 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1057 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 400 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 296 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 185 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 179 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 58 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 15968 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8958 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1531 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1143 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 881 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 524 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 29037 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22710 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15442 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3301 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1044 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 987 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 948 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 933 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 673 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 757 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 457 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 454 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 379 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 53 },
];

export default snowflakeAum;
