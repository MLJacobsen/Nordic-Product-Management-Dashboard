/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-19 (live Snowflake query via Copilot MCP)
 * Closed portfolios retain their latest available valuation dates.
 */
export const aumDataDate = '2026-11-17';
export const valuationDate = aumDataDate;
export const lastUpdated = '2026-11-19T10:04:47+01:00';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 67077 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31216 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31201 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32843 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26639 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 28292 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26737 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23488 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20517 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 23005 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20522 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18529 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17517 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15631 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12485 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12222 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9384 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7669 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6775 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7892 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7349 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7633 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6149 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5495 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5577 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5171 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 4056 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2995 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3570 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 1295 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5215 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3630 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2422 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2396 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1109 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2439 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1210 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1170 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1058 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1031 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1080 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 961 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 783 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 891 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 724 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 746 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 736 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 491 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 469 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 236 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 166 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 74 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07' },
];

export default snowflakeAum;
