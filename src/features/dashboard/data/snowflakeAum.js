/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-04 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-04';

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64082 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30743 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29567 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27237 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27852 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26292 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22133 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21197 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17362 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17302 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13061 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12232 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9171 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8147 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7545 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7507 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7418 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5836 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5738 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5651 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5002 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3711 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2880 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3031 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2856 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2624 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2028 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2162 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2095 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1583 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1369 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1202 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 986 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1092 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 403 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 302 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 184 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 191 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 71 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16624 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8507 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1447 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1099 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 881 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 516 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN GLOBAL', aumMillNok: 30528 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN KON-TIKI', aumMillNok: 22804 },
  { fundId: 'SKAVEKST', name: 'SKAGEN VEKST', aumMillNok: 15742 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN FOCUS', aumMillNok: 3190 },
  { fundId: 'SKASEL100', name: 'SKAGEN SELECT 100', aumMillNok: 1030 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 968 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN GLOBAL II', aumMillNok: 1010 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN GLOBAL III', aumMillNok: 717 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 726 },
  { fundId: 'SKASEL60', name: 'SKAGEN SELECT 60', aumMillNok: 460 },
  { fundId: 'SKASEL80', name: 'SKAGEN SELECT 80', aumMillNok: 459 },
  { fundId: 'SKASEL30', name: 'SKAGEN SELECT 30', aumMillNok: 382 },
  { fundId: 'SKASEL15', name: 'SKAGEN SELECT 15', aumMillNok: 54 },
];

export default snowflakeAum;
