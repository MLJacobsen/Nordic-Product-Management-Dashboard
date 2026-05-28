/**
 * WSJ Markets news service.
 * Uses rss2json API to bypass CORS restrictions on the WSJ RSS feed.
 * Auto-refresh is handled by the component (5-minute interval).
 */

const WSJ_RSS_URL = 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml';
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(WSJ_RSS_URL)}`;

function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('no-NO', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  } catch {
    return dateStr;
  }
}

export async function fetchWsjNews() {
  try {
    const response = await fetch(RSS2JSON_API);
    if (!response.ok) throw new Error('Feed unavailable');
    const data = await response.json();
    if (data.status !== 'ok' || !data.items) throw new Error('Invalid response');
    return data.items.slice(0, 8).map((item) => ({
      title: item.title || '',
      link: item.link || item.guid || '#',
      pubDate: formatDate(item.pubDate),
    }));
  } catch {
    // Last resort fallback — should rarely trigger
    return [{ title: 'Unable to load WSJ news. Check connection.', link: '#', pubDate: '' }];
  }
}
