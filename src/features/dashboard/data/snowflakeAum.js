/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-06-30';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66044 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30422 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29382 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28438 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27792 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26507 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 20819 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 20042 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17778 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16860 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13463 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12188 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9799 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8998 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7698 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7478 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7316 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5723 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5594 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5175 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4955 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3563 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2988 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2711 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2828 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2614 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2342 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2019 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2066 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1617 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1387 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1204 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 973 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1070 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 410 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 302 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 197 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 190 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 62 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16801 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 9207 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1537 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1161 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 862 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 531 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 29659 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22408 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15422 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3202 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1046 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1015 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 973 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 743 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 691 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 739 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 461 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 459 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 382 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
