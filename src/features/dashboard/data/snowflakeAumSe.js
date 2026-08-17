/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-08-17 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-08-13';
export const seShareClassCount = 129;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 59816 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 56435 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 54830 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54503 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38795 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36936 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 35224 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26236 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22544 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22486 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20670 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19652 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17094 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16024 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12875 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12201 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9597 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9946 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 9318 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8686 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6393 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3581 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3158 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2672 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2420 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2057 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1890 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1816 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1422 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1126 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1072 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 372 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 369 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 320 },
];

export default snowflakeAumSe;
