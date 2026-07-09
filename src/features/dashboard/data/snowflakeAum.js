/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-09 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-07-07';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65645 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30638 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29369 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27816 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27330 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26894 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 21195 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 20439 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17625 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16867 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13334 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12198 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9454 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8374 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7705 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7502 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7318 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5748 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5646 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5406 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4986 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3635 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2951 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2927 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2831 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2613 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2273 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2068 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2063 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1606 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1488 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1380 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1207 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1059 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 985 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 408 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 199 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 191 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 67 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16838 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8921 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1143 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 870 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 527 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30616 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22408 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15713 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3246 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1047 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1021 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1008 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 734 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 733 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 716 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 464 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 463 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 384 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
