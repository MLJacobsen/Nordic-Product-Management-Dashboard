import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

function NewsFeed({ title, fetchFn, icon, testId }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadNews = useCallback(async () => {
    const data = await fetchFn();
    setArticles(data);
    setLoading(false);
    setLastUpdated(new Date());
  }, [fetchFn]);

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [loadNews]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-2" data-testid={`${testId}-loading`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-5 bg-neutral-100 rounded" />
        ))}
      </div>
    );
  }

  return (
    <div data-testid={testId}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-neutral-700 flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {title}
        </h4>
        {lastUpdated && (
          <span className="text-[10px] text-neutral-400">
            {lastUpdated.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
      <ul className="space-y-1.5">
        {articles.map((article, index) => (
          <motion.li
            key={`${article.title}-${index}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-neutral-600 hover:text-primary-500 transition-colors leading-snug"
            >
              <span className="font-medium">{article.title}</span>
              {article.pubDate && (
                <span className="text-[10px] text-neutral-400 ml-1.5">{article.pubDate}</span>
              )}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;
