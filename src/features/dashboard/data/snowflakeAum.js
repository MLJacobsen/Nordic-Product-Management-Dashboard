/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-20 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-11-18';
export const valuationDate = '2026-11-18';
export const lastUpdated = '2026-11-20T10:07:28+01:00';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 67362 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31230 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31346 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32900 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26709 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 28600 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 26861 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23272 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20522 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 23147 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20735 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18640 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17624 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15620 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12643 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12226 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9719 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7710 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6810 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7837 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7424 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7648 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6154 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5530 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5578 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5181 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3987 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2992 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3533 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 897 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5216 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3636 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2400 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2404 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1112 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2441 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1208 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1169 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1056 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1020 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1086 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 963 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 787 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 885 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 716 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 750 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 736 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 488 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 470 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 235 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 168 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 75 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07' },
];

export default snowflakeAum;
