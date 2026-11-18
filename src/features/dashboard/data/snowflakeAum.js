/**
 * AUM data sourced from Snowflake ? NO-domiciled funds.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Portfolios without newer AUM retain their latest available valuation (2026-11-07).
 * Last refreshed: 2026-11-18 (live Snowflake query via Copilot MCP)
 */
export const aumDataDate = '2026-11-16';
export const valuationDate = '2026-11-16';
export const lastUpdated = '2026-11-18T10:08:26+01:00';
export const noShareClassCount = 331;

const snowflakeAum = [
  { fundId: 'GLOIDX', name: 'Storebrand Global Indeks', aumMillNok: 68064 },
  { fundId: 'GLOKRE', name: 'Storebrand Global Kreditt IG', aumMillNok: 31202 },
  { fundId: 'SKAGLOBAL', name: 'SKAGEN Global', aumMillNok: 32006 },
  { fundId: 'NOKRE', name: 'Storebrand Norsk Kreditt IG', aumMillNok: 32835 },
  { fundId: 'GLOQNT', name: 'Storebrand Global Multifactor', aumMillNok: 27018 },
  { fundId: 'LIKINS', name: 'Storebrand Likviditet', aumMillNok: 27902 },
  { fundId: 'GLOACX', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 27074 },
  { fundId: 'NORIDX', name: 'Storebrand Indeks - Norge', aumMillNok: 23548 },
  { fundId: 'SKAKONTIKI', name: 'SKAGEN Kon-Tiki', aumMillNok: 20762 },
  { fundId: 'NORGEI', name: 'Storebrand Norge I', aumMillNok: 23082 },
  { fundId: 'KOKRED', name: 'Storebrand Kort Kreditt IG', aumMillNok: 20508 },
  { fundId: 'GLOESG', name: 'Storebrand Global Optimised', aumMillNok: 18792 },
  { fundId: 'KROKING', name: 'Kron Indeks Global', aumMillNok: 17757 },
  { fundId: 'SKAVEKST', name: 'SKAGEN Vekst', aumMillNok: 15868 },
  { fundId: 'GLOGLT', name: 'Storebrand Global Solutions', aumMillNok: 12739 },
  { fundId: 'RENTESII', name: 'Storebrand Korte Renter SII', aumMillNok: 12219 },
  { fundId: 'GLOEMX', name: 'Storebrand Indeks - Nye Markeder', aumMillNok: 9233 },
  { fundId: 'DVERDE', name: 'Delphi Global', aumMillNok: 7705 },
  { fundId: 'GLOPLU', name: 'Storebrand Global Plus', aumMillNok: 6878 },
  { fundId: 'NRDIDX', name: 'Storebrand Indeks - Norden', aumMillNok: 8044 },
  { fundId: 'GLOIDXVAL', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 7440 },
  { fundId: 'NOKR20', name: 'Storebrand Norsk Kreditt IG 20', aumMillNok: 7631 },
  { fundId: 'KREDITT', name: 'Storebrand Kreditt', aumMillNok: 6142 },
  { fundId: 'NORDICHY', name: 'Storebrand Nordic High Yield', aumMillNok: 5492 },
  { fundId: 'GLOBLA13', name: 'Storebrand Global Obligasjon 1-3', aumMillNok: 5574 },
  { fundId: 'GLOBLA', name: 'Storebrand Global Obligasjon', aumMillNok: 5168 },
  { fundId: 'NORGE', name: 'Storebrand Norge', aumMillNok: 4077 },
  { fundId: 'SKAFOCUS', name: 'SKAGEN Focus', aumMillNok: 3039 },
  { fundId: 'INNLAN', name: 'Storebrand Aksje Innland', aumMillNok: 3585 },
  { fundId: 'NORPLU', name: 'Storebrand Norge Horisont', aumMillNok: 1301 },
  { fundId: 'FREMTID100', name: 'Storebrand Fremtid 100', aumMillNok: 5288 },
  { fundId: 'NORDICIG', name: 'Storebrand Nordic IG Medium Duration', aumMillNok: 3625 },
  { fundId: 'VERDI', name: 'Storebrand Verdi', aumMillNok: 2429 },
  { fundId: 'GLOBAL', name: 'Storebrand Global Value', aumMillNok: 2432 },
  { fundId: 'FORNYBAR', name: 'Storebrand Fornybar Energi', aumMillNok: 1144 },
  { fundId: 'FREMTID50', name: 'Storebrand Fremtid 50', aumMillNok: 2458 },
  { fundId: 'DVERDEVAL', name: 'Delphi Global Valutasikret', aumMillNok: 1222 },
  { fundId: 'FREMTID80', name: 'Storebrand Fremtid 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'GLOPLUVAL', name: 'Storebrand Global Plus Valutasikret', aumMillNok: 1185 },
  { fundId: 'GLOQNTVAL', name: 'Storebrand Global Multifaktor Valutasikret', aumMillNok: 1071 },
  { fundId: 'DNORD', name: 'Delphi Nordic', aumMillNok: 1048 },
  { fundId: 'SKASEL100', name: 'SKAGEN Select 100', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKAGLOBALII', name: 'SKAGEN Global II', aumMillNok: 1108 },
  { fundId: 'STATA', name: 'Storebrand Stat', aumMillNok: 961 },
  { fundId: 'SKAM2', name: 'SKAGEN m2', aumMillNok: 799 },
  { fundId: 'DNORGE', name: 'Delphi Norge', aumMillNok: 892 },
  { fundId: 'VEKST', name: 'Storebrand Vekst', aumMillNok: 727 },
  { fundId: 'SKAGLOBALIII', name: 'SKAGEN Global III', aumMillNok: 765 },
  { fundId: 'SEBLIQ', name: 'SEB NOK Liquidity Fund', aumMillNok: 736 },
  { fundId: 'DKOMB', name: 'Delphi Kombinasjon', aumMillNok: 495 },
  { fundId: 'SKASEL60', name: 'SKAGEN Select 60', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL80', name: 'SKAGEN Select 80', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID30', name: 'Storebrand Fremtid 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'SKASEL30', name: 'SKAGEN Select 30', aumMillNok: 0, valuationDate: '2026-11-07' },
  { fundId: 'FREMTID10', name: 'Storebrand Fremtid 10', aumMillNok: 468 },
  { fundId: 'EURIDX', name: 'Storebrand Europe Index', aumMillNok: 236 },
  { fundId: 'SMART', name: 'Storebrand Fremtidens Byer', aumMillNok: 168 },
  { fundId: 'EQUAL', name: 'Storebrand Like Muligheter', aumMillNok: 76 },
  { fundId: 'SKASEL15', name: 'SKAGEN Select 15', aumMillNok: 0, valuationDate: '2026-11-07' },
];

export default snowflakeAum;
