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

/**
 * Checks monthly report (månedsrapport) status for all funds.
 * A report is considered "late" if we are past the 5th of the current month
 * and the fund's latest report is not for the previous month.
 */
export async function fetchMonthlyReportStatus() {
  const funds = await fetchFunds();
  const now = new Date();
  const currentDay = now.getDate();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed

  // The expected report month is the previous month
  const expectedYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const expectedMonth = currentMonth === 0 ? 12 : currentMonth; // 1-indexed for display
  const expectedKey = `${expectedYear}-${String(expectedMonth).padStart(2, '0')}`;

  const isPastDeadline = currentDay > 5;

  const fundsWithStatus = funds.map((f) => {
    const hasCurrentReport = f.monthlyReportMonth === expectedKey;
    const isLate = isPastDeadline && !hasCurrentReport;
    return { ...f, hasCurrentReport, isLate };
  });

  const uploaded = fundsWithStatus.filter((f) => f.hasCurrentReport).length;
  const late = fundsWithStatus.filter((f) => f.isLate);

  return {
    total: funds.length,
    uploaded,
    expectedKey,
    isPastDeadline,
    allUploaded: uploaded === funds.length,
    lateFunds: late,
  };
}
