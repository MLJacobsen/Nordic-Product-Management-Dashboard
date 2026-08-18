import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import WsjNewsFeed from '../WsjNewsFeed';

vi.mock('../../services/newsService', () => ({
  fetchWsjNews: vi.fn(() =>
    Promise.resolve([
      { title: 'Markets Rally Today', link: 'https://wsj.com/1', pubDate: '2026-05-26' },
      { title: 'Fed Holds Rates Steady', link: 'https://wsj.com/2', pubDate: '2026-05-25' },
    ])
  ),
}));

describe('WsjNewsFeed', () => {
  it('renders loading state initially', () => {
    render(<WsjNewsFeed />);
    expect(screen.getByTestId('wsj-loading')).toBeInTheDocument();
  });

  it('renders news articles after loading', async () => {
    render(<WsjNewsFeed />);
    await waitFor(() => {
      expect(screen.getByTestId('wsj-news-feed')).toBeInTheDocument();
    });
    expect(screen.getByText('Markets Rally Today')).toBeInTheDocument();
    expect(screen.getByText('Fed Holds Rates Steady')).toBeInTheDocument();
  });
});
