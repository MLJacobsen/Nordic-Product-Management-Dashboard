import mockFunds from '../data/mockFunds';

/**
 * Fund service — abstracts data fetching for fund NAV and KIID status.
 * Currently uses mock data. Replace the implementations below with
 * real API calls when an endpoint is available.
 */

export async function fetchFunds() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockFunds;
}

export async function fetchKiidStatus() {
  const funds = await fetchFunds();
  const total = funds.length;
  const withKiid = funds.filter((f) => f.kiid).length;
  return {
    total,
    withKiid,
    missingKiid: total - withKiid,
    allCompliant: withKiid === total,
    fundsMissingKiid: funds.filter((f) => !f.kiid),
  };
}
