/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-07 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-07-03';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65774 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30662 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29351 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27929 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27859 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26991 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 21179 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 20397 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17662 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16844 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13496 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12191 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9639 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8415 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7818 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7488 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7312 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5745 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5631 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5223 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4997 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3649 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2973 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2923 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2866 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2612 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2360 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2065 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2057 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1613 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1385 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1205 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1059 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 978 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 747 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 409 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 201 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 193 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 63 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16770 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8998 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1498 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1174 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 877 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 535 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN GLOBAL', aumMillNok: 30420 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN KON-TIKI', aumMillNok: 22498 },
  { fundId: 'SKAVEKST', name: 'SKAGEN VEKST', aumMillNok: 15748 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN FOCUS', aumMillNok: 3288 },
  { fundId: 'SKASEL100', name: 'SKAGEN SELECT 100', aumMillNok: 1060 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1026 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN GLOBAL II', aumMillNok: 1000 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN GLOBAL III', aumMillNok: 710 },
  { fundId: 'SKASEL80', name: 'SKAGEN SELECT 80', aumMillNok: 465 },
  { fundId: 'SKASEL60', name: 'SKAGEN SELECT 60', aumMillNok: 465 },
  { fundId: 'SKASEL30', name: 'SKAGEN SELECT 30', aumMillNok: 386 },
  { fundId: 'SKASEL15', name: 'SKAGEN SELECT 15', aumMillNok: 54 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 743 },
];

export default snowflakeAum;
