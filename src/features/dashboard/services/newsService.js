/**
 * News services for WSJ Markets, Finansavisen, and Dagens Industri.
 * Uses rss2json API to bypass CORS restrictions on RSS feeds.
 * Auto-refresh is handled by the components (5-minute interval).
 */

const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';

const WSJ_RSS_URL = 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml';
const E24_RSS_URL = 'https://e24.no/rss2';
const DAGENS_INDUSTRI_RSS_URL = 'https://digital.di.se/rss';

function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('no-NO', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  } catch {
    return dateStr;
  }
}

async function fetchRssFeed(rssUrl, count = 6) {
  try {
    const apiUrl = `${RSS2JSON_BASE}${encodeURIComponent(rssUrl)}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Feed unavailable');
    const data = await response.json();
    if (data.status !== 'ok' || !data.items) throw new Error('Invalid response');
    return data.items.slice(0, count).map((item) => ({
      title: item.title || '',
      link: item.link || item.guid || '#',
      pubDate: formatDate(item.pubDate),
    }));
  } catch {
    return [{ title: 'Kunne ikke laste nyheter. Sjekk tilkobling.', link: '#', pubDate: '' }];
  }
}

export async function fetchWsjNews() {
  return fetchRssFeed(WSJ_RSS_URL, 6);
}

export async function fetchE24News() {
  return fetchRssFeed(E24_RSS_URL, 6);
}

export async function fetchDagensIndustriNews() {
  return fetchRssFeed(DAGENS_INDUSTRI_RSS_URL, 6);
}
