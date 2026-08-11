/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-11 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-07';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66286 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30894 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29680 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28119 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27162 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26780 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22171 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21306 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17953 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17799 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13604 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12251 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9128 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8439 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7738 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7700 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7472 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5854 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5777 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5666 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5079 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3732 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3322 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3050 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2956 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2901 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2635 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2180 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2162 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2147 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1611 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1404 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1242 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1131 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 979 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 409 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 201 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 191 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 81 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17253 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8870 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1491 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1126 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 895 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 524 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30838 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22684 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15978 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1044 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1022 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 968 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 740 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 725 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 467 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 466 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 387 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
