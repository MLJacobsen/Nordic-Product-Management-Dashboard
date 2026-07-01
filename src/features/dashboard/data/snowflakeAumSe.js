/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-06-17 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-06-30';
export const seShareClassCount = 70;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 58387 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 55108 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 54257 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53069 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 36186 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38145 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 35904 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26649 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22715 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 21775 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20282 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 19449 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 16909 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 16169 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 12748 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 12002 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 9050 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 9044 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8851 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8479 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6183 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3359 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3204 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2602 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2306 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2007 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1861 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1703 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1400 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1101 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1044 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 360 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 340 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 206 },
];

export default snowflakeAumSe;
