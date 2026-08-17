/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-17 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-13';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66807 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30927 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29719 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28378 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27454 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26671 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22621 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21691 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18069 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17818 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13739 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12343 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9358 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8919 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8481 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7761 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7699 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7496 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5946 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5793 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5674 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5082 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3866 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3307 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3107 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2979 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2930 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2646 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2227 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2196 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2157 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1619 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1501 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1420 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1246 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1152 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1130 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 985 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 903 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 405 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 310 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 207 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 188 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 77 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17408 },

  // Delphi
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 525 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30879 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22411 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15917 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1041 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1026 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 957 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 760 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 728 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 721 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 467 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 466 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 387 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 55 },
];

export default snowflakeAum;
