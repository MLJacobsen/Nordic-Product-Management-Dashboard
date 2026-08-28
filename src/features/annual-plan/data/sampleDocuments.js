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

export const sampleDocuments = parseWorkbookRange([
  headers,
  ['Annual Report', 'SE', 'Audited financial statements and management commentary', 'Annually', ' April ', 'Yes', 'UCITS Directive Art. 69', 'SV', 'Auxality', 'Fundlist SE\nhttps://storebrand.fondlista.se/', '', 'Anna'],
  ['EMT', 'NO', 'MiFID II cost and target market data', 'At least annually', 'February', 'No', 'MiFID II + FinDatEx', 'EN', 'Internally', 'Emailed to distributors', '', 'Jamal'],
  ['Monthly Factsheet', 'LU', 'Fund performance and holdings summary', 'Monthly', 'Monthly', 'No', 'Market practice', 'EN, FR, DE', 'Fund Periodic Report', '', '', 'Marit'],
  ['Semi-Annual Report', 'IE', 'Half-year financial report', 'Semi-annually', 'Augusti', 'Yes', 'UCITS Directive Art. 70', 'EN', 'Carne', '', '', 'Joakim'],
  ['SFDR Periodic', 'NO', 'Periodic sustainability reporting', 'Annually', 'April', 'Yes', 'SFDR Art. 11', 'NO, EN', 'Auxality', '', '', 'Frode'],
  ['Fund Rules', 'SE', 'Legally binding fund management rules', 'Ad hoc', '', 'Yes', 'UCITS Directive + national law', 'SV, EN', 'In design', 'https://storebrand.fondlista.se/', '', 'Lars'],
  ['Static Data Open Funds Template', 'NO/SE/LU', 'Standardised static fund data', 'At least annually and on change', '', 'No', '', 'English', 'Manually', 'Annually/Ad hoc', '', 'Jamal'],
]);
