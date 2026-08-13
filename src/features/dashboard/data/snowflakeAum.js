/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-13 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-11';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66143 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30871 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29723 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27974 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27177 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26766 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22477 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21549 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17935 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17808 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13626 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12259 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9172 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8406 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7729 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7673 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7484 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5859 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5794 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5667 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5073 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3818 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3089 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2951 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2898 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2639 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2184 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2181 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2135 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1610 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1407 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1235 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1131 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 980 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 407 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 309 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 203 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 189 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 76 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17231 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8822 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1485 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1125 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 901 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 524 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30891 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22577 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15858 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3326 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1041 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1025 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 948 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 753 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 728 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 466 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 465 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 387 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
