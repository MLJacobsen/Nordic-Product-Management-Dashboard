/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-01 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-06-29';

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 65825 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30452 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29397 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28492 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27748 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26486 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 20587 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 19738 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17723 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16894 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13412 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12189 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9742 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8966 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7626 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7424 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7321 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5713 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5588 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5177 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4966 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3576 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2979 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2713 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2782 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2516 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2321 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2032 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2074 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1616 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1384 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1196 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 974 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1062 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 410 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 300 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 195 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 187 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 62 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16754 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 9083 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1514 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1149 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 855 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 528 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 29746 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22488 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15493 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3214 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1049 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1027 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 975 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 743 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 693 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 735 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 461 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 459 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 382 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
