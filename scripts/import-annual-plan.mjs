import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import readXlsxFile from 'read-excel-file/node';

const workbookPath = process.argv[2];
const worksheetName = process.argv[3] || 'Sheet1';

if (!workbookPath) {
  console.error('Usage: npm run import:annual-plan -- <workbook.xlsx> [worksheet]');
  process.exit(1);
}

const resolvedWorkbookPath = path.resolve(workbookPath);
const outputPath = path.resolve(
  'src',
  'features',
  'annual-plan',
  'data',
  'documentOverview.json',
);
const sourceName = path.basename(resolvedWorkbookPath)
  .replace(/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-/i, '');

try {
  await readFile(resolvedWorkbookPath);
} catch {
  console.error(`Workbook not found: ${resolvedWorkbookPath}`);
  process.exit(1);
}

let workbookRows;
try {
  workbookRows = await readXlsxFile(resolvedWorkbookPath, { sheet: worksheetName });
} catch (error) {
  console.error(`Could not read worksheet "${worksheetName}": ${error.message}`);
  process.exit(1);
}

const values = workbookRows.map((row) => {
  const rowValues = row.map((value) => {
    if (value === null || value === undefined) return '';
    if (value instanceof Date) return value.toISOString();
    return String(value);
  });

  while (rowValues.at(-1) === '') rowValues.pop();
  return rowValues;
});

while (values.at(-1)?.length === 0) values.pop();

await writeFile(
  outputPath,
  `${JSON.stringify({
    source: sourceName,
    worksheet: worksheetName,
    values,
  }, null, 2)}\n`,
  'utf8',
);

console.log(`Published ${Math.max(values.length - 1, 0)} workbook rows to ${outputPath}.`);
