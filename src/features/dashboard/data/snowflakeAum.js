/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-23 (live Snowflake query via Copilot MCP)
 * Latest available per portfolio; older valuation dates are recorded below.
 */
export const aumDataDate = '2026-11-19';
export const valuationDate = aumDataDate;
export const lastUpdated = '2026-11-23T09:10:03Z';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 66696 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31216 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30937 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32925 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26493 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 28891 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26495 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22970 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20437 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 23081 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20734 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18485 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17420 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15465 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12623 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12229 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9647 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7715 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6727 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7759 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7305 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7646 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6150 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5528 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5585 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5181 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3984 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2893 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3524 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 894 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5167 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3719 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2393 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2387 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1108 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2429 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1187 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1150 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1039 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1023 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1077 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 965 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 757 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 886 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 717 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 743 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 728 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 489 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 472 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 243 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 166 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 75 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07' },
];

export default snowflakeAum;
