/**
 * News services for WSJ Markets, E24, and Dagens Industri.
 * Uses multiple CORS proxy strategies to get fresh RSS data.
 * Auto-refresh is handled by the components (5-minute interval).
 */

const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';
const ALLORIGINS_BASE = 'https://api.allorigins.win/raw?url=';

const WSJ_RSS_URL = 'https://www.cnbc.com/id/100003114/device/rss/rss.html';
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

function parseXmlItems(xmlText, count) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');
  const items = doc.querySelectorAll('item');
  const results = [];
  for (let i = 0; i < Math.min(items.length, count); i++) {
    const item = items[i];
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '#';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    results.push({ title, link, pubDate: formatDate(pubDate) });
  }
  return results;
}

async function fetchViaAllOrigins(rssUrl, count) {
  const url = `${ALLORIGINS_BASE}${encodeURIComponent(rssUrl)}`;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error('Feed unavailable');
  const xml = await response.text();
  return parseXmlItems(xml, count);
}

async function fetchViaRss2Json(rssUrl, count) {
  const cacheBuster = `&_t=${Date.now()}`;
  const apiUrl = `${RSS2JSON_BASE}${encodeURIComponent(rssUrl)}${cacheBuster}`;
  const response = await fetch(apiUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error('Feed unavailable');
  const data = await response.json();
  if (data.status !== 'ok' || !data.items) throw new Error('Invalid response');
  return data.items.slice(0, count).map((item) => ({
    title: item.title || '',
    link: item.link || item.guid || '#',
    pubDate: formatDate(item.pubDate),
  }));
}

async function fetchRssFeed(rssUrl, count = 6) {
  try {
    // Try allorigins first (no caching)
    return await fetchViaAllOrigins(rssUrl, count);
  } catch {
    try {
      // Fallback to rss2json
      return await fetchViaRss2Json(rssUrl, count);
    } catch {
      return [{ title: 'Kunne ikke laste nyheter. Sjekk tilkobling.', link: '#', pubDate: '' }];
    }
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
