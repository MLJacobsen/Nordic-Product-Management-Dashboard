/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-27 (live Snowflake query via Copilot MCP)
 * Latest available AUM per portfolio; seven portfolios last reported zero on 2026-11-07.
 */
export const aumDataDate = '2026-11-26';
export const valuationDate = '2026-11-26';
export const lastUpdated = '2026-11-27T10:04:36+01:00';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 67865 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 32127 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 31711 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32843 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 26366 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 29916 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 25524 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23257 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20130 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 22420 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20272 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18749 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17524 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15400 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12390 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12244 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9806 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7652 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6734 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 7682 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7529 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7679 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6176 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5515 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5595 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5227 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 3995 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 2840 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3517 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 890 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5126 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 4911 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2385 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2422 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1057 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2393 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1183 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1149 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1022 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1007 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1105 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 973 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 770 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 880 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 710 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 763 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 728 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 485 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 481 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 251 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 165 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 80 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07' },
];

export default snowflakeAum;
