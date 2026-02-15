import type { NextApiRequest, NextApiResponse } from 'next';

type SearchResponse = {
  results?: unknown[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse>
) {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  const apiKey = process.env.apiKey;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
}
