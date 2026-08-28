import {
  extractSafeLinks,
  normalizeSchedule,
  parseWorkbookRange,
  splitDomiciles,
  splitPeople,
} from './workbookParser';

describe('workbookParser', () => {
  test.each([
    [' April ', 'Annually', 'fixed', [3]],
    ['Augusti', 'Semi-annually', 'fixed', [7]],
    ['  februari  ', 'Annually', 'fixed', [1]],
    ['Monthly', 'Monthly', 'monthly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
    ['', 'Monthly / Q', 'monthly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
    ['', 'Ad hoc', 'unscheduled', []],
  ])('normalizes month "%s" and frequency "%s"', (month, frequency, kind, months) => {
    expect(normalizeSchedule(month, frequency)).toEqual({ kind, months });
  });

  test('parses reordered and variant workbook headers defensively', () => {
    const documents = parseWorkbookRange([
      ['Notes before the range'],
      ['Owner', 'Month', 'Document/report', 'Legal requirement', 'Domicile', 'Frequency', 'Process link'],
      ['Anna / Nina', ' April ', 'Annual Report', 'Yes', 'SE/LU', 'Annually', 'https://example.com/process'],
      ['', '', '', '', '', '', ''],
    ]);

    expect(documents).toHaveLength(1);
    expect(documents[0]).toMatchObject({
      document: 'Annual Report',
      domicile: 'SE/LU',
      responsible: 'Anna / Nina',
      schedule: { kind: 'fixed', months: [3] },
    });
  });

  test('treats NaN cells as missing values', () => {
    const documents = parseWorkbookRange([
      ['Documents and reports', 'Domicile', 'Month'],
      ['Fund Rules', 'NaN', 'NaN'],
    ]);

    expect(documents[0].domicile).toBe('');
    expect(documents[0].schedule.kind).toBe('unscheduled');
  });

  test('splits combined domiciles and owners', () => {
    expect(splitDomiciles('NO/SE/LU')).toEqual(['NO', 'SE', 'LU']);
    expect(splitPeople('Merethe / Jamal; Joakim')).toEqual(['Merethe', 'Jamal', 'Joakim']);
  });

  test('only returns safe HTTP links', () => {
    expect(extractSafeLinks('Portal https://example.com/path\njavascript:alert(1)')).toEqual([
      'https://example.com/path',
    ]);
  });

  test('rejects ranges without a recognizable header', () => {
    expect(() => parseWorkbookRange([['Unknown', 'Columns']])).toThrow(
      'header row could not be identified',
    );
  });
});
