/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-26 (live Snowflake query via Copilot MCP)
 * Valuation date: 2026-11-24 (seven portfolios last reported zero on 2026-11-07).
 */
export const aumDataDate = '2026-11-24';
export const valuationDate = aumDataDate;
export const lastUpdated = '2026-11-26T10:04:32';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 68117 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31605 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31465 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32850 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26625 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 29319 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 25688 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 22749 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20390 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22703 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20697 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18812 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17600 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15380 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12499 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12243 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9965 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7801 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6764 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7649 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7410 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7693 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6174 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5520 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5590 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5212 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3926 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2840 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3463 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 878 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5143 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 4636 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2356 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2413 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1071 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2434 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1194 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0 },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1149 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1034 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1009 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0 },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1096 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 975 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 761 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 870 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 698 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 757 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 728 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 486 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0 },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0 },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0 },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0 },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 479 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 250 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 166 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 80 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0 },
];

export default snowflakeAum;
