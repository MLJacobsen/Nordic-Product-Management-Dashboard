/**
 * AUM data sourced from Snowflake (FUND_AUM table).
 * Connection: Storebrand Snowflake → GitHub Actions → JSON export
 * Query: SELECT FUND_ID, FUND_NAME, AUM_NOK_MILL FROM PROD.FUND_DATA.FUND_AUM
 *        WHERE REPORT_DATE = CURRENT_DATE() AND DOMICILE = 'NO'
 *
 * TODO: Replace mock data with live Snowflake integration via GitHub Actions secret.
 * See: https://docs.snowflake.com/en/developer-guide/node-js/nodejs-driver
 */
const snowflakeAum = [
  // Norwegian Equity Funds
  { fundId: 'stb-aksje-innland', name: 'Storebrand Aksje Innland', aumMillNok: 8432 },
  { fundId: 'stb-norge', name: 'Storebrand Norge', aumMillNok: 12845 },
  { fundId: 'stb-norge-horisont', name: 'Storebrand Norge Horisont', aumMillNok: 3214 },
  { fundId: 'stb-norge-inst', name: 'Storebrand Norge Institusjon', aumMillNok: 15672 },
  { fundId: 'stb-vekst', name: 'Storebrand Vekst', aumMillNok: 6891 },
  { fundId: 'stb-verdi', name: 'Storebrand Verdi', aumMillNok: 9456 },
  { fundId: 'stb-equal-opp', name: 'Storebrand Equal Opportunities', aumMillNok: 2134 },
  { fundId: 'stb-fornybar', name: 'Storebrand Fornybar Energi', aumMillNok: 4567 },
  { fundId: 'stb-global-all', name: 'Storebrand Global All Countries', aumMillNok: 18923 },

  // Index Funds
  { fundId: 'stb-indeks-norge', name: 'Storebrand Indeks Norge', aumMillNok: 42156 },
  { fundId: 'stb-indeks-norden', name: 'Storebrand Indeks - Norden', aumMillNok: 28934 },
  { fundId: 'stb-indeks-alle', name: 'Storebrand Indeks - Alle Markeder', aumMillNok: 67821 },
  { fundId: 'stb-global-indeks', name: 'Storebrand Global Indeks', aumMillNok: 89234 },
  { fundId: 'stb-global-indeks-vs', name: 'Storebrand Global Indeks Valutasikret', aumMillNok: 34521 },
  { fundId: 'stb-europe-indeks', name: 'Storebrand Europe Index', aumMillNok: 12345 },
  { fundId: 'stb-indeks-nye-markeder', name: 'Storebrand Indeks Nye Markeder', aumMillNok: 8976 },

  // Bond Funds
  { fundId: 'stb-frn-finans', name: 'Storebrand FRN Finansfond', aumMillNok: 5678 },
  { fundId: 'stb-global-fi', name: 'Storebrand Global Fixed Income', aumMillNok: 7234 },
  { fundId: 'stb-nordic-hy', name: 'Storebrand Nordic High Yield', aumMillNok: 11245 },
  { fundId: 'stb-global-corp-13', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillNok: 6789 },
  { fundId: 'stb-global-corp-46', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillNok: 4532 },

  // Lifecycle Funds
  { fundId: 'stb-fremtid-10', name: 'Storebrand Fremtid 10', aumMillNok: 3456 },
  { fundId: 'stb-fremtid-50', name: 'Storebrand Fremtid 50', aumMillNok: 8912 },
  { fundId: 'stb-fremtid-100', name: 'Storebrand Fremtid 100', aumMillNok: 14567 },

  // Delphi Funds
  { fundId: 'delphi-global', name: 'Delphi Global', aumMillNok: 21345 },
  { fundId: 'delphi-global-vs', name: 'Delphi Global Valutasikret', aumMillNok: 9876 },
  { fundId: 'delphi-kombinasjon', name: 'Delphi Kombinasjon', aumMillNok: 5432 },
  { fundId: 'delphi-nordic', name: 'Delphi Nordic', aumMillNok: 7654 },
  { fundId: 'delphi-norge', name: 'Delphi Norge', aumMillNok: 18234 },

  // SKAGEN Funds
  { fundId: 'skagen-focus', name: 'SKAGEN Focus', aumMillNok: 6543 },
  { fundId: 'skagen-global', name: 'SKAGEN Global', aumMillNok: 45678 },
  { fundId: 'skagen-kon-tiki', name: 'SKAGEN Kon-Tiki', aumMillNok: 12345 },
  { fundId: 'skagen-m2', name: 'SKAGEN m2', aumMillNok: 8765 },
  { fundId: 'skagen-vekst', name: 'SKAGEN Vekst', aumMillNok: 4321 },
];

export default snowflakeAum;
