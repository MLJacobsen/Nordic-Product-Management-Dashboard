/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-06 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-07-02';
export const noShareClassCount = 198;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65696 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30675 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29359 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27876 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27845 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26301 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 21041 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 20255 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17638 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16846 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13407 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12190 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9556 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8937 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7750 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7470 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7312 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5742 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5622 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5156 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5002 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3625 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2961 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2903 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2853 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2612 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2341 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2061 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2040 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1609 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1379 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1201 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1054 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 979 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 408 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 197 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 191 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 63 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16729 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8980 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1496 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1160 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 870 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 531 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30492 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22218 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15631 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3226 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1054 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1022 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1002 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 743 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 711 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 745 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 463 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 462 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 383 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
