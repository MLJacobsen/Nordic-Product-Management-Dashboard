/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-14 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-12';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66238 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30870 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29710 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28127 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26618 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27201 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22587 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21618 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17935 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17801 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13651 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12260 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9241 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8410 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7672 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7720 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7487 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5855 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5799 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5669 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5072 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3833 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2958 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3099 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2903 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2643 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2164 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2188 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2198 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1612 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1412 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1238 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 981 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1143 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 407 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 309 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 188 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 203 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 76 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17247 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8868 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1494 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1127 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 905 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 525 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30645 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22388 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15765 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3293 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1036 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 949 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1017 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 721 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 723 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 755 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 465 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 463 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 386 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
