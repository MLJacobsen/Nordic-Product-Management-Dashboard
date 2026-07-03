/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-03 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-07-01';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65957 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30404 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29362 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28214 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27796 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26504 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 20731 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 19953 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17740 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16850 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13430 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12189 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9849 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8971 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7684 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7459 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7312 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5750 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5608 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5175 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5006 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3577 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2977 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2866 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2820 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2614 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2371 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2066 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2013 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1615 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1515 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1387 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1202 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1059 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 972 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 409 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 196 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 188 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 63 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16800 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 9093 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1153 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 863 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 529 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30099 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22559 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15469 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3205 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1050 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1018 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 988 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 743 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 741 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 701 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 462 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 460 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 383 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
