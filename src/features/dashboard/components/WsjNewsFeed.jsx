import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchWsjNews } from '../services/newsService';

function WsjNewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWsjNews().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-2" data-testid="wsj-loading">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-6 bg-neutral-100 rounded" />
        ))}
      </div>
    );
  }

  return (
    <div data-testid="wsj-news-feed">
      <h3 className="text-lg font-semibold text-neutral-800 mb-3">WSJ Markets</h3>
      <ul className="space-y-2">
        {articles.map((article, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-neutral-700 hover:text-primary-600 transition-colors"
              data-testid={`wsj-article-${index}`}
            >
              <span className="font-medium">{article.title}</span>
              {article.pubDate && (
                <span className="text-xs text-neutral-400 ml-2">{article.pubDate}</span>
              )}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default WsjNewsFeed;
