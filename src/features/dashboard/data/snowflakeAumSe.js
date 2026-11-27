/**
 * AUM data for Sweden-domiciled funds sourced from Snowflake.
 * Source: DDS_SAM.HOLDINGS.AUM_FUND joined with DWH_SAM.CONFORMED_DIM.DIM_FUND
 * Last refreshed: 2026-11-27 (live Snowflake query via Copilot MCP)
 */
export const aumSeDataDate = '2026-11-26';
export const valuationDate = '2026-11-26';
export const lastUpdated = '2026-11-27T10:04:36+01:00';
export const seShareClassCount = 126;

const snowflakeAumSe = [
  { fundId: 'SPPUSX', name: 'Storebrand USA', aumMillSek: 57727 },
  { fundId: 'SPPGLX', name: 'Storebrand Global All Countries', aumMillSek: 52879 },
  { fundId: 'SPP60', name: 'SPP Generation 60-tal', aumMillSek: 53509 },
  { fundId: 'SPPGPL', name: 'Storebrand Global Plus', aumMillSek: 53786 },
  { fundId: 'SPP70', name: 'SPP Generation 70-tal', aumMillSek: 38179 },
  { fundId: 'SPPEUX', name: 'Storebrand Europa', aumMillSek: 36782 },
  { fundId: 'SPPTPL', name: 'Storebrand Emerging Markets Plus', aumMillSek: 32396 },
  { fundId: 'SPPEMX', name: 'Storebrand Emerging Markets', aumMillSek: 26413 },
  { fundId: 'SPPSPL', name: 'Storebrand Sverige Plus', aumMillSek: 22126 },
  { fundId: 'SPPPEM', name: 'Storebrand Kortränta', aumMillSek: 22160 },
  { fundId: 'SPPSVX', name: 'Storebrand Sverige', aumMillSek: 20807 },
  { fundId: 'SPPFOB', name: 'Storebrand FRN Företagsobligation', aumMillSek: 20207 },
  { fundId: 'SPPOBL', name: 'Storebrand Obligation', aumMillSek: 17843 },
  { fundId: 'SPP50', name: 'SPP Generation 50-tal', aumMillSek: 15550 },
  { fundId: 'SPPGRO', name: 'Storebrand Grön Obligation', aumMillSek: 13111 },
  { fundId: 'SPPM80', name: 'SPP Mix 80', aumMillSek: 11860 },
  { fundId: 'SPPHIY', name: 'Storebrand High Yield Företagsobligation', aumMillSek: 8626 },
  { fundId: 'SPPJAX', name: 'Storebrand Japan', aumMillSek: 8602 },
  { fundId: 'SPPGLT', name: 'Storebrand Global Solutions', aumMillSek: 8688 },
  { fundId: 'SPP80', name: 'SPP Generation 80-tal', aumMillSek: 8551 },
  { fundId: 'SPPGFP', name: 'Storebrand Global Corporate Bond IG 4-6Y', aumMillSek: 6455 },
  { fundId: 'SPPBOL', name: 'Storebrand Sverige Småbolag Plus', aumMillSek: 3270 },
  { fundId: 'SPP40', name: 'SPP Generation 40-tal', aumMillSek: 3079 },
  { fundId: 'SPPGOD', name: 'GodFond Sverige & Världen', aumMillSek: 2641 },
  { fundId: 'SPPSTX', name: 'Storebrand Global High Dividend Low Volatility', aumMillSek: 2605 },
  { fundId: 'SPPM20', name: 'SPP Mix 20', aumMillSek: 2070 },
  { fundId: 'SPPGSCB', name: 'Storebrand Global Corporate Bond IG 1-3Y', aumMillSek: 1788 },
  { fundId: 'SPPGMP', name: 'Storebrand Global Multifactor', aumMillSek: 1896 },
  { fundId: 'SPPM50', name: 'SPP Mix 50', aumMillSek: 1385 },
  { fundId: 'SPPM100', name: 'SPP Mix 100', aumMillSek: 1115 },
  { fundId: 'SPPEPL', name: 'Storebrand Europa Plus', aumMillSek: 1062 },
  { fundId: 'SPPM120', name: 'Storebrand Mix 120', aumMillSek: 429 },
  { fundId: 'SPPUPL', name: 'Storebrand USA Plus', aumMillSek: 362 },
  { fundId: 'SPPGDM', name: 'Storebrand Global Developed Markets', aumMillSek: 591 },
];

export default snowflakeAumSe;
