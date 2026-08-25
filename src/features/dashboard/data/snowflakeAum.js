/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-25 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-21';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64535 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30815 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29708 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27236 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26552 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26491 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22923 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22008 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 18159 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17527 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12939 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12376 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9273 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8199 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7648 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7613 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7503 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6015 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5774 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5674 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5062 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3864 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3150 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2934 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2920 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2645 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2237 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2187 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2007 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1596 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1412 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1228 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1134 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 983 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 402 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 311 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 209 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 181 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 79 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17029 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8641 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1479 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1122 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 902 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 523 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30421 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22126 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15725 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3291 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1033 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1017 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 934 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 760 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 722 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 461 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 460 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 383 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 55 },
];

export default snowflakeAum;
