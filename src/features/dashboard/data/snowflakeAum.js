/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-26 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-24';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64489 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30851 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29713 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27191 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26725 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26419 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22929 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22002 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17560 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 18196 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12916 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12380 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9149 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8192 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7638 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7595 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7506 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6031 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5773 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5675 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5068 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3865 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2908 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3144 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2941 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2645 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1990 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2238 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2182 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1592 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1399 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1225 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 982 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1127 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 402 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 310 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 181 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 213 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 79 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17041 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8563 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1465 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1114 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 898 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 521 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30711 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 21841 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15734 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3283 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1033 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 937 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1029 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 706 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 731 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 753 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 461 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 460 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 384 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 55 },
];

export default snowflakeAum;
