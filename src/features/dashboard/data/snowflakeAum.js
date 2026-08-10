/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-10 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-08-06';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66165 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30872 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29658 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28121 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 26769 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27118 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22165 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 21218 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17913 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 17800 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13463 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12248 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9180 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8419 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7699 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7696 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7466 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5846 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5778 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5663 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5026 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3720 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2953 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3040 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2886 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2633 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2127 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2153 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2168 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1609 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1403 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1234 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 978 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1125 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 409 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 190 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 200 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 75 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17203 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 8860 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1490 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1130 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 889 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 525 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30958 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22787 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15961 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3310 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1045 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 969 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1025 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 723 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 728 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 738 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 467 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 467 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 387 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
