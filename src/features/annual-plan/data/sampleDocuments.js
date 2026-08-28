import { parseWorkbookRange } from './workbookParser';

const headers = [
  'Documents and reports',
  'Domicile',
  'Description/Comment',
  'Update frequency',
  'Month',
  'Legal requirement (Yes/No)',
  'Regulation / Source',
  'Language',
  'System support',
  'Published /Distributed',
  'Process description link',
  'Responsible with in Product',
];

const descriptions = {
  annual: 'Audited financial statements and management commentary',
  eet: 'Template containing ESG data for distributors. Market standard.',
  emt: 'Template containing MiFID II cost and target market data. Market standard.',
  ept: 'Template containing PRIIPs data used by distributors for cost and risk calculations.',
  fundRules: 'Legally binding document defining fund management, investment limits and investor rights.',
  factsheet: 'Marketing document summarising fund performance and holdings.',
  priip: 'Standardised investor information describing risks, costs and performance scenarios.',
  prospectus: 'Investor overview of the fund including investment strategy, fees and risks.',
  semiAnnual: 'Half-year financial report giving interim fund performance and financial position.',
  sfdrPeriodic: 'Periodic ESG reporting showing how sustainability objectives are met.',
  sfdrPre: 'Disclosure of ESG characteristics before an investment decision.',
  sfdrWeb: 'Web disclosure of ESG characteristics and sustainability risks to investors.',
  staticData: 'General static fund data based on the standardised Open Funds Template.',
  kiid: 'Investor information document for UCITS funds still used in the UK.',
  ukCci: 'New UK retail disclosure framework replacing the UK PRIIPs KID and UCITS KIID in 2027.',
};

const annualFrequency = 'At least annually and when significant changes occur';
const fundlist = 'Fundlist SE\nhttps://storebrand.fondlista.se/';
const rows = [
  ['Annual Report', 'SE', descriptions.annual, 'Annually', 'April', 'Yes', 'UCITS Directive Art. 69', 'SV', 'Auxality / In design', fundlist, '', 'Anna'],
  ['Annual Report', 'NO', descriptions.annual, 'Annually', 'April', 'Yes', 'UCITS Directive Art. 69', 'NO, EN', '', '', '', 'Frode'],
  ['Annual Report', 'LU', descriptions.annual, 'Annually', 'April', 'Yes', 'UCITS Directive Art. 69', 'EN', 'JPM/Fundrock', '', '', 'Joakim'],
  ['Annual Report', 'IE', descriptions.annual, 'Annually', 'April', 'Yes', 'UCITS Directive Art. 69', 'EN', 'Carne', '', '', 'Joakim'],

  ['EET', 'SE', descriptions.eet, 'Annually', 'April', 'No', 'SFDR + FinDatEx standard', 'EN', 'Internally / Semi manually', 'Emailed to distributors', '', 'Anna/Nina'],
  ['EET', 'NO', descriptions.eet, 'Annually', 'April', 'No', 'SFDR + FinDatEx standard', 'EN', 'Internally / Semi manually', '', '', 'Frode'],
  ['EET', 'LU', descriptions.eet, 'Annually', 'April', 'No', 'SFDR + FinDatEx standard', 'EN', 'Internally', '', '', 'Frode'],
  ['EET', 'IE', descriptions.eet, 'Annually', 'April', 'No', 'SFDR + FinDatEx standard', 'EN', 'Internally', '', '', 'Frode'],

  ['EMT', 'SE', descriptions.emt, annualFrequency, 'February', 'No', 'MiFID II + FinDatEx standard', 'EN', 'Internally / Manually', 'Emailed to distributors', '', 'Nina'],
  ['EMT', 'NO', descriptions.emt, annualFrequency, 'February', 'No', 'MiFID II + FinDatEx standard', 'EN', 'Internally / Manually', '', '', 'Jamal'],
  ['EMT', 'LU', descriptions.emt, annualFrequency, 'February', 'Yes', 'MiFID II + FinDatEx standard', 'EN', 'JPMorgan / DFIN', '', '', 'Jamal'],
  ['EMT', 'IE', descriptions.emt, annualFrequency, 'February', 'Yes', 'MiFID II + FinDatEx standard', 'EN', 'Carne', '', '', 'Joakim'],

  ['EPT', 'SE', descriptions.ept, annualFrequency, 'February', 'No', 'PRIIPs + FinDatEx standard', 'EN', 'Auxality', 'Emailed to distributors', '', 'Nina'],
  ['EPT', 'NO', descriptions.ept, annualFrequency, 'February', 'Yes', 'PRIIPs + FinDatEx standard', 'EN', 'Auxality', '', '', 'Jamal'],
  ['EPT', 'LU', descriptions.ept, annualFrequency, 'February', 'Yes', 'PRIIPs + FinDatEx standard', 'EN', 'JPMorgan / DFIN', '', '', 'Jamal'],

  ['Fund Rules', 'SE', descriptions.fundRules, 'Ad hoc', '', 'Yes', 'UCITS Directive + Swedish Act 2004:46', 'SV, EN', 'In design', fundlist, '', 'Lars'],
  ['Fund Rules', 'NO', descriptions.fundRules, 'Ad hoc', '', 'Yes', 'UCITS Directive + national law', 'NO, SV, EN, FR', 'Manually', '', '', 'Frode/Merethe'],

  ['Monthly Factsheet', 'SE', descriptions.factsheet, 'Monthly', 'Monthly', 'No', 'Market practice (MiFID II indirect)', 'SV, EN', 'MPS / STB', fundlist, '', 'Lars'],
  ['Monthly Factsheet', 'NO', descriptions.factsheet, 'Monthly', 'Monthly', 'No', 'Market practice (MiFID II indirect)', 'NO, SV, DA, EN, DE, FR', 'Fund Periodic Report / STB', '', '', 'Marit'],
  ['Monthly Factsheet', 'LU', descriptions.factsheet, 'Monthly', 'Monthly', 'No', 'Market practice (MiFID II indirect)', 'EN, FR, DE, NL, FI', 'Fund Periodic Report / STB', '', '', 'Marit'],
  ['Monthly Factsheet', 'IE', descriptions.factsheet, 'Monthly / Q', '', 'No', 'Market practice (MiFID II indirect)', '?', 'Carne', '', '', 'Marit'],

  ['PRIIP KID', 'SE', descriptions.priip, annualFrequency, 'February', 'Yes', 'PRIIPs Regulation (EU 1286/2014)', 'SV, EN, NO', 'Auxality', fundlist, '', 'Nina'],
  ['PRIIP KID', 'NO', descriptions.priip, annualFrequency, 'February', 'Yes', 'PRIIPs Regulation (EU 1286/2014)', 'NO, SV, DA, FI, IS, EN, FR, NL, DE', 'Auxality', '', '', 'Jamal/Merethe'],
  ['PRIIP KID', 'LU', descriptions.priip, annualFrequency, 'February', 'Yes', 'PRIIPs Regulation (EU 1286/2014)', 'EN, FR, DE, NL, FI', 'JPMorgan / DFIN', '', '', 'Merethe/Jamal'],

  ['Prospectus', 'SE', descriptions.prospectus, annualFrequency, 'April', 'Yes', 'UCITS Directive 2009/65/EC + local FI rules', 'SV, EN', 'Semi manually / In design', fundlist, '', 'Anna'],
  ['Prospectus', 'NO', descriptions.prospectus, annualFrequency, 'June', 'Yes', 'UCITS Directive 2009/65/EC + local FI rules', 'NO, SV, EN, FR', 'Manual, created in Word', '', '', 'Frode/Merethe'],
  ['Prospectus incl fund rules', 'LU', descriptions.prospectus, annualFrequency, '', 'Yes', 'UCITS Directive 2009/65/EC + local FI rules', 'EN', 'Elvinger legal advice', '', '', 'Joakim'],
  ['Prospectus incl fund rules', 'IE', descriptions.prospectus, annualFrequency, '', 'Yes', 'UCITS Directive 2009/65/EC + local FI rules', 'EN', 'Carne', '', '', 'Joakim'],

  ['Semi-Annual Report', 'SE', descriptions.semiAnnual, 'Semi-annually', 'Augusti', 'Yes', 'UCITS Directive Art. 70', 'SV', 'Auxality', fundlist, '', 'Anna'],
  ['Semi-Annual Report', 'NO', descriptions.semiAnnual, 'Semi-annually', 'Augusti', 'Yes', 'UCITS Directive Art. 70', 'NO, EN', 'Under review', '', '', 'Frode'],
  ['Semi-Annual Report', 'LU', descriptions.semiAnnual, 'Semi-annually', 'Augusti', 'Yes', 'UCITS Directive Art. 70', 'EN', 'JPM/Fundrock', '', '', 'Joakim'],
  ['Semi-Annual Report', 'IE', descriptions.semiAnnual, 'Semi-annually', 'Augusti', 'Yes', 'UCITS Directive Art. 70', 'EN', 'Carne', '', '', 'Joakim'],

  ['SFDR Periodic', 'SE', descriptions.sfdrPeriodic, 'Annually', 'April', 'Yes', 'SFDR Art. 11', 'SV, EN', 'Auxality', fundlist, '', 'Anna'],
  ['SFDR Periodic', 'NO', descriptions.sfdrPeriodic, 'Annually', 'April', 'Yes', 'SFDR Art. 11', 'NO, EN', 'Auxality', '', '', 'Frode'],
  ['SFDR Periodic', 'LU', descriptions.sfdrPeriodic, 'Annually', 'April', 'Yes', 'SFDR Art. 11', 'EN', 'Auxality', '', '', 'Frode'],
  ['SFDR Periodic', 'IE', descriptions.sfdrPeriodic, 'Annually', 'April', 'Yes', 'SFDR Art. 11', 'EN', 'Carne', '', '', 'Frode'],

  ['SFDR Pre-contractual', 'SE', descriptions.sfdrPre, 'Annually', 'April', 'Yes', 'SFDR Art. 6-9', 'SV, EN', 'Auxality', fundlist, '', 'Anna'],
  ['SFDR Pre-contractual', 'NO', descriptions.sfdrPre, 'Annually', 'April', 'Yes', 'SFDR Art. 6-9', 'NO, SV, EN, FR', 'Auxality / manual', '', '', 'Frode'],
  ['SFDR Pre-contractual', 'LU', descriptions.sfdrPre, 'Annually', 'April', 'Yes', 'SFDR Art. 6-9', 'EN', 'Auxality / Skagen internal', '', '', 'Frode'],
  ['SFDR Pre-contractual', 'IE', descriptions.sfdrPre, 'Annually', 'April', 'Yes', 'SFDR Art. 6-9', 'EN', 'Carne', '', '', 'Frode'],

  ['SFDR Web disclosure', 'SE', descriptions.sfdrWeb, 'Annually', 'April', 'Yes', 'SFDR (EU 2019/2088)', 'SV, EN', 'Auxality', fundlist, '', 'Anna'],
  ['SFDR Web disclosure', 'NO', descriptions.sfdrWeb, 'Annually', 'April', 'Yes', 'SFDR (EU 2019/2088)', 'NO, EN', 'Web / Auxality', '', '', 'Frode'],
  ['SFDR Web disclosure', 'LU', descriptions.sfdrWeb, 'Annually', 'April', 'Yes', 'SFDR (EU 2019/2088)', 'EN', 'Web / Auxality', '', '', 'Frode'],
  ['SFDR Web disclosure', 'IE', descriptions.sfdrWeb, 'Annually', 'April', 'Yes', 'SFDR (EU 2019/2088)', 'EN', 'Carne', '', '', 'Frode'],

  ['Static Data Open Funds Template', 'NO/SE/LU', descriptions.staticData, annualFrequency, '', 'No', '', 'English', 'Manually', 'Annually / Ad hoc', '', 'Jamal'],

  ['UCIT KIID', 'LU', descriptions.kiid, annualFrequency, 'February', 'Yes', 'Commission Regulation (EU) No 583/2010', '', 'JPMorgan / DFIN', '', '', 'Merethe/Jamal'],
  ['UCIT KIID', 'IE', descriptions.kiid, annualFrequency, 'February', 'Yes', 'Commission Regulation (EU) No 583/2010', '', 'Carne', '', '', 'Joakim'],

  ['UK CCI', 'LU', descriptions.ukCci, 'Annually', '', 'Yes', 'Commission Regulation (EU) No 583/2010', '', 'JPMorgan / DFIN', '', '', 'Merethe/Jamal'],
  ['UK CCI', 'NO', descriptions.ukCci, 'Annually', '', 'Yes', 'Commission Regulation (EU) No 583/2010', '', '', '', '', ''],
  ['UK CCI', 'IE', descriptions.ukCci, 'Annually', '', 'Yes', 'Commission Regulation (EU) No 583/2010', '', 'Carne', '', '', 'Joakim'],
];

export const sampleDocuments = parseWorkbookRange([headers, ...rows]);
