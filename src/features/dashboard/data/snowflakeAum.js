/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-06 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-04';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66206 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30883 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29629 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28152 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27388 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27063 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22145 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21203 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17925 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17301 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13545 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12244 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9169 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8432 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7706 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7689 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7443 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5839 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5739 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5665 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5030 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3714 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3038 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2955 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2882 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2630 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2169 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2146 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2132 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1609 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1402 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1234 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1117 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 990 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 408 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 303 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 195 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 191 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 76 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17192 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8861 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1490 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1127 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 885 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 524 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31160 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22755 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15944 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3273 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1046 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1032 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 973 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 734 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 733 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 722 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 466 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 466 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 386 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
