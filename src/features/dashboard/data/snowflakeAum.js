/**
 * AUM data sourced from Snowflake — NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-07-08 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-07-06';
export const noShareClassCount = 331;

const snowflakeAum = [
  // Storebrand
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66154 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 30680 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 29394 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 28076 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27885 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27131 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 21111 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 20355 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17763 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 16865 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 13545 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12197 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9654 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 8458 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7748 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7528 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7325 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 5746 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5643 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5226 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 4998 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3633 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 2981 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 2915 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 2832 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 2615 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 2349 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2077 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2051 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 1616 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1505 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 1389 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1210 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1064 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 981 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 410 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 306 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 201 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 192 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 64 },

  // Kron
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16864 },

  // Delphi
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 9046 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1166 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 876 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 533 },

  // SKAGEN
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30502 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 22633 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15727 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3301 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 1054 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 1017 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1002 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 737 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 734 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 712 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 466 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 466 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 385 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 54 },
];

export default snowflakeAum;
