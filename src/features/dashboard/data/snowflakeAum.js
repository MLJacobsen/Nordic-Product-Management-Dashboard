/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-24 (live Snowflake query via Copilot MCP)
 * Latest available per portfolio; zero-AUM portfolios last reported on 2026-11-07.
 */
export const aumDataDate = '2026-11-20';
export const valuationDate = '2026-11-20';
export const lastUpdated = '2026-11-24T10:03:12+01:00';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 64867 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31334 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 30748 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32994 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 25673 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 28924 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 25672 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22672 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 19986 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22765 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20738 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 17898 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 16886 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15233 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12241 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12232 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9364 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7444 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6515 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7597 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7111 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7663 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6152 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5530 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5595 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5215 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3938 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2812 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3475 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 884 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5022 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3733 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2371 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2330 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1059 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2393 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1136 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1111 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1005 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 998 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1069 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 969 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 750 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 870 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 700 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 738 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 728 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 482 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 478 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 239 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 162 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 78 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0 },
];

export default snowflakeAum;
