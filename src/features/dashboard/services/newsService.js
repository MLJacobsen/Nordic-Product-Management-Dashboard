/**
 * WSJ Markets news service.
 * In production, use a CORS proxy or backend endpoint to fetch the RSS feed.
 * Falls back to mock data if the feed is unavailable.
 */

const WSJ_RSS_URL = 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml';

const mockNews = [
  { title: 'Global Stocks Rally on Trade Optimism', link: 'https://www.wsj.com', pubDate: '2026-05-26' },
  { title: 'Fed Signals Steady Rates Through Summer', link: 'https://www.wsj.com', pubDate: '2026-05-26' },
  { title: 'Oil Prices Climb as OPEC Maintains Output Cuts', link: 'https://www.wsj.com', pubDate: '2026-05-25' },
  { title: 'European Banks Post Strong Q1 Results', link: 'https://www.wsj.com', pubDate: '2026-05-25' },
  { title: 'Nordic Markets Outperform on ESG Inflows', link: 'https://www.wsj.com', pubDate: '2026-05-24' },
];

function parseRssItems(xmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');
  const items = doc.querySelectorAll('item');
  return Array.from(items).slice(0, 8).map((item) => ({
    title: item.querySelector('title')?.textContent || '',
    link: item.querySelector('link')?.textContent || '#',
    pubDate: item.querySelector('pubDate')?.textContent || '',
  }));
}

export async function fetchWsjNews() {
  try {
    const response = await fetch(WSJ_RSS_URL);
    if (!response.ok) throw new Error('Feed unavailable');
    const xml = await response.text();
    return parseRssItems(xml);
  } catch {
    // Fallback to mock data when CORS blocks the request
    return mockNews;
  }
}
