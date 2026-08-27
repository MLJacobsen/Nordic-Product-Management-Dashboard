/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-27 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-25';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64811 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30924 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29733 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27374 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26785 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26547 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23036 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22115 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 18183 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17653 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12926 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12382 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9197 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8231 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7727 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7623 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7512 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6037 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5758 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5680 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5082 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3888 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3159 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2974 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2923 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2656 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2246 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2189 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2000 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1597 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1406 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1230 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1134 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 983 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 403 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 311 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 215 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 181 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 80 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17142 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8581 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1469 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1129 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 904 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 526 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30485 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22009 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15854 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3293 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1038 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1022 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 939 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 762 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 726 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 706 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 462 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 462 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 385 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 55 },
];

export default snowflakeAum;
