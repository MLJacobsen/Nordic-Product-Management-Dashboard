import {
  createGraphWorkbookClient,
  parseRangeOrigin,
  readSharedWorkbookConfig,
  WorkbookConflictError,
} from './graphWorkbook';
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
  'Produced by',
  'Process description link',
  'Responsible',
];

const workbookValues = [
  headers,
  ['Quarterly Fund Report', 'IE', 'Quarterly performance overview', 'Quarterly', 'March, June, Sept, Dec', 'No', '', 'EN', 'Carne', '', 'Marit'],
];

function response(payload, status = 200) {
  return Promise.resolve(new Response(
    payload === null ? null : JSON.stringify(payload),
    {
      headers: payload === null ? {} : { 'Content-Type': 'application/json' },
      status,
    },
  ));
}

function createClient(fetchImpl) {
  return createGraphWorkbookClient({
    config: {
      filePath: '/Felles/2 Governing Documents/Document overview.xlsx',
      hostname: 'storebrand.sharepoint.com',
      siteId: 'site-id',
      sitePath: '/sites/NordiskProdukt',
      worksheet: 'Overview',
    },
    fetchImpl,
    getAccessToken: async () => 'access-token',
  });
}

describe('Graph workbook integration', () => {
  test('reads environment-driven SPA configuration with least-privilege scopes', () => {
    const configured = readSharedWorkbookConfig({
      BASE_URL: '/Nordic-Product-Management-Dashboard/',
      VITE_ENTRA_CLIENT_ID: 'client-id',
      VITE_ENTRA_TENANT_ID: 'tenant-id',
      VITE_GRAPH_FILE_PATH: '/Felles/Document overview.xlsx',
      VITE_GRAPH_SITE_ID: 'site-id',
      VITE_GRAPH_WORKSHEET: 'Overview',
    }, { origin: 'https://example.github.io' });

    expect(configured).toMatchObject({
      enabled: true,
      redirectUri: 'https://example.github.io/Nordic-Product-Management-Dashboard/',
      scopes: ['Files.ReadWrite.All'],
    });
  });

  test('parses an offset Excel range origin', () => {
    expect(parseRangeOrigin("'Overview'!C4:M54")).toEqual({
      startColumn: 2,
      startRow: 4,
    });
  });

  test('writes the current Responsible column and confirms the persisted value', async () => {
    const changedValues = workbookValues.map((row) => [...row]);
    changedValues[1][10] = 'Marit / Nina';
    const fetchImpl = vi.fn()
      .mockImplementationOnce(() => response({ id: 'session-1' }))
      .mockImplementationOnce(() => response({ address: "'Overview'!A1:K2", values: workbookValues }))
      .mockImplementationOnce(() => response({ values: [['Marit / Nina']] }))
      .mockImplementationOnce(() => response({ address: "'Overview'!A1:K2", values: changedValues }))
      .mockImplementationOnce(() => response(null, 204));
    const document = parseWorkbookRange(workbookValues)[0];

    const result = await createClient(fetchImpl).updateResponsible({
      document,
      expectedResponsible: 'Marit',
      people: ['Marit', 'Nina'],
    });

    expect(result.document.responsible).toBe('Marit / Nina');
    expect(fetchImpl.mock.calls[2][0]).toContain("range(address='K2')");
    expect(JSON.parse(fetchImpl.mock.calls[2][1].body)).toEqual({
      values: [['Marit / Nina']],
    });
  });

  test('rejects a stale responsibility instead of overwriting it', async () => {
    const liveValues = workbookValues.map((row) => [...row]);
    liveValues[1][10] = 'Someone else';
    const fetchImpl = vi.fn()
      .mockImplementationOnce(() => response({ id: 'session-1' }))
      .mockImplementationOnce(() => response({ address: "'Overview'!A1:K2", values: liveValues }))
      .mockImplementationOnce(() => response(null, 204));
    const document = parseWorkbookRange(workbookValues)[0];

    await expect(createClient(fetchImpl).updateResponsible({
      document,
      expectedResponsible: 'Marit',
      people: ['Nina'],
    })).rejects.toEqual(expect.objectContaining({
      code: 'WORKBOOK_CONFLICT',
      currentResponsible: 'Someone else',
    }));
    expect(fetchImpl).toHaveBeenCalledTimes(3);
    expect(
      fetchImpl.mock.calls.some(([, options]) => options?.method === 'PATCH'),
    ).toBe(false);
  });

  test('exposes Graph conflict responses as explicit errors', () => {
    const error = new WorkbookConflictError('Changed', 'Marit');
    expect(error).toMatchObject({
      code: 'WORKBOOK_CONFLICT',
      currentResponsible: 'Marit',
    });
  });
});
