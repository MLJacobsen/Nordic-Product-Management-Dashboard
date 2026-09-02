export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DOCUMENT_CATEGORIES = {
  reports: {
    label: 'Reports & factsheets',
    color: '#6e1018',
    background: '#fce4e4',
  },
  disclosures: {
    label: 'Sustainability disclosures',
    color: '#d45a1f',
    background: '#fff0e4',
  },
  investor: {
    label: 'Investor documents',
    color: '#8d5260',
    background: '#f6e8ec',
  },
  templates: {
    label: 'Data templates',
    color: '#796157',
    background: '#f2ece8',
  },
  other: {
    label: 'Other',
    color: '#57534e',
    background: '#f5f5f4',
  },
};

const FIELD_DEFINITIONS = {
  document: ['Documents and reports', 'Document and report', 'Document/report', 'Document'],
  domicile: ['Domicile'],
  description: ['Description/Comment', 'Description', 'Comment'],
  frequency: ['Update frequency', 'Frequency'],
  month: ['Month'],
  legalRequirement: ['Legal requirement (Yes/No)', 'Legal requirement', 'Legal'],
  regulationSource: ['Regulation / Source', 'Regulation/Source', 'Regulation', 'Source'],
  language: ['Language'],
  systemSupport: ['System support'],
  publicationDistribution: ['Published /Distributed', 'Published/Distributed', 'Publication/Distribution'],
  processLink: ['Process description link', 'Process link'],
  responsible: ['Responsible with in Product', 'Responsible within Product', 'Responsible', 'Owner'],
};

const MONTH_ALIASES = {
  january: 0,
  januari: 0,
  januar: 0,
  february: 1,
  februari: 1,
  februar: 1,
  march: 2,
  mars: 2,
  april: 3,
  may: 4,
  maj: 4,
  mai: 4,
  june: 5,
  juni: 5,
  july: 6,
  juli: 6,
  august: 7,
  augusti: 7,
  september: 8,
  october: 9,
  oktober: 9,
  november: 10,
  december: 11,
  desember: 11,
};

function normalizeHeader(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function cleanCell(value) {
  if (value === null || value === undefined) return '';
  const text = String(value).trim();
  return text.toLowerCase() === 'nan' ? '' : text;
}

function headerMatches(header, aliases) {
  const normalized = normalizeHeader(header);
  return aliases.some((alias) => normalizeHeader(alias) === normalized);
}

function buildColumnMap(headerRow) {
  return Object.fromEntries(
    Object.entries(FIELD_DEFINITIONS).map(([field, aliases]) => [
      field,
      headerRow.findIndex((header) => headerMatches(header, aliases)),
    ]),
  );
}

function findHeaderRow(values) {
  let best = { index: -1, matches: 0 };

  values.slice(0, 15).forEach((row, index) => {
    const map = buildColumnMap(row);
    const matches = Object.values(map).filter((columnIndex) => columnIndex >= 0).length;
    if (map.document >= 0 && matches > best.matches) {
      best = { index, matches };
    }
  });

  if (best.index < 0 || best.matches < 2) {
    throw new Error('The workbook header row could not be identified.');
  }

  return best.index;
}

export function normalizeSchedule(monthValue, frequencyValue = '') {
  const month = cleanCell(monthValue).toLowerCase();
  const frequency = cleanCell(frequencyValue).toLowerCase();

  if (month === 'monthly' || month === 'manadligen' || frequency.includes('monthly')) {
    return { kind: 'monthly', months: MONTHS.map((_, index) => index) };
  }

  const normalizedMonth = month
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\.$/, '')
    .trim();

  if (Object.hasOwn(MONTH_ALIASES, normalizedMonth)) {
    return { kind: 'fixed', months: [MONTH_ALIASES[normalizedMonth]] };
  }

  return { kind: 'unscheduled', months: [] };
}

export function getDocumentCategory(documentName) {
  const name = cleanCell(documentName).toLowerCase();

  if (/annual report|factsheet|fund report/.test(name)) return 'reports';
  if (/sfdr/.test(name)) return 'disclosures';
  if (/eet|emt|ept|static data|template/.test(name)) return 'templates';
  if (/priip|kiid|prospectus|fund rules|uk cci/.test(name)) return 'investor';
  return 'other';
}

export function splitPeople(value) {
  return cleanCell(value)
    .split(/[\/,;&]+/)
    .map((person) => person.trim())
    .filter(Boolean);
}

export function splitDomiciles(value) {
  return cleanCell(value)
    .split(/[\/,;&]+/)
    .map((domicile) => domicile.trim().toUpperCase())
    .filter(Boolean);
}

export function extractSafeLinks(value) {
  const text = cleanCell(value);
  const urlPattern = /https?:\/\/[^\s]+/gi;
  const links = [];
  let match;

  while ((match = urlPattern.exec(text)) !== null) {
    try {
      const url = new URL(match[0]);
      if (url.protocol === 'http:' || url.protocol === 'https:') links.push(url.href);
    } catch {
      // Ignore malformed URL-like text while preserving the original field value.
    }
  }

  return links;
}

export function parseWorkbookRange(values) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error('The workbook range did not contain any rows.');
  }

  const headerRowIndex = findHeaderRow(values);
  const columnMap = buildColumnMap(values[headerRowIndex]);

  return values
    .slice(headerRowIndex + 1)
    .map((row, rowOffset) => {
      const read = (field) => {
        const columnIndex = columnMap[field];
        return columnIndex >= 0 ? cleanCell(row[columnIndex]) : '';
      };
      const document = read('document');
      if (!document) return null;

      const domicile = read('domicile');
      const frequency = read('frequency');
      const month = read('month');
      const rowNumber = headerRowIndex + rowOffset + 2;

      return {
        id: `${rowNumber}-${normalizeHeader(document)}-${normalizeHeader(domicile)}`,
        rowNumber,
        document,
        domicile,
        description: read('description'),
        frequency,
        month,
        legalRequirement: read('legalRequirement'),
        regulationSource: read('regulationSource'),
        language: read('language'),
        systemSupport: read('systemSupport'),
        publicationDistribution: read('publicationDistribution'),
        processLink: read('processLink'),
        responsible: read('responsible'),
        schedule: normalizeSchedule(month, frequency),
        category: getDocumentCategory(document),
      };
    })
    .filter(Boolean);
}
