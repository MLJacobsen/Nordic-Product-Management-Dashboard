/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-24 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-20';
export const noShareClassCount = 330;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64557 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30833 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29690 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27232 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26686 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26472 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22726 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21786 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17859 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17517 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12933 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12374 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9208 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8200 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7610 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7577 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7497 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6012 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5765 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5676 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5068 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3831 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3121 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2907 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2892 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2644 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2213 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2178 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2023 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1593 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1407 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1222 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1128 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 981 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 760 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 401 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 310 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 207 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 181 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 78 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17022 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8617 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1469 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1113 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 895 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 520 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30323 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 21813 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15562 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3269 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1023 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1013 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 937 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 720 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 459 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 458 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 382 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 55 },
];

export default snowflakeAum;
