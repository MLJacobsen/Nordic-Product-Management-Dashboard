/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-26 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-06-26';

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65292 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30454 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29378 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28222 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27774 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26215 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 20479 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 19577 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17554 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16883 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13291 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12184 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9739 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8858 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7616 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7354 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7316 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5698 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5584 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5175 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4965 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3569 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2955 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2702 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2761 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2514 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2284 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2035 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2065 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1608 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1374 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1185 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 1023 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1051 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 408 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 299 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 195 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 185 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 62 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16584 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8977 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1499 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1143 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 853 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 527 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN GLOBAL', aumMillNok: 29707 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN KON-TIKI', aumMillNok: 22333 },
  { fundId: 'SKAVEKST', name: 'SKAGEN VEKST', aumMillNok: 15475 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN FOCUS', aumMillNok: 3218 },
  { fundId: 'SKASEL100', name: 'SKAGEN SELECT 100', aumMillNok: 1053 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1034 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN GLOBAL II', aumMillNok: 973 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 753 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN GLOBAL III', aumMillNok: 691 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 730 },
  { fundId: 'SKASEL60', name: 'SKAGEN SELECT 60', aumMillNok: 461 },
  { fundId: 'SKASEL80', name: 'SKAGEN SELECT 80', aumMillNok: 458 },
  { fundId: 'SKASEL30', name: 'SKAGEN SELECT 30', aumMillNok: 382 },
  { fundId: 'SKASEL15', name: 'SKAGEN SELECT 15', aumMillNok: 54 },
];

export default snowflakeAum;
