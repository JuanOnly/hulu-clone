import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Results from '../components/ui/Results';
import HeroBanner from '../components/ui/HeroBanner';
import MovieModal from '../components/ui/MovieModal';
import SearchBar from '../components/ui/SearchBar';
import requests from '../utils/requests';
import { MovieResult } from '../components/ui/Thumbnail';

interface HomeProps {
  results: MovieResult[];
}

export default function Home({ results }: HomeProps) {
  const [selectedMovie, setSelectedMovie] = useState<MovieResult | null>(null);

  const handleMovieClick = (movie: MovieResult) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-[#06202A] min-h-screen">
      <Head>
        <title>Hulu 2.0 - Stream Movies & TV Shows</title>
        <meta name="description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone - built with Next.js and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hulu 2.0 - Stream Movies & TV Shows" />
        <meta property="og:description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hulu 2.0 Clone" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hulu 2.0 - Stream Movies & TV Shows" />
        <meta name="twitter:description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone" />
      </Head>

      <Header />
      
      <div className="flex justify-center mb-4">
        <SearchBar onMovieClick={handleMovieClick} />
      </div>

      <Nav />

      {results.length > 0 && (
        <HeroBanner results={results} onMovieClick={handleMovieClick} />
      )}

      <Results results={results} onMovieClick={handleMovieClick} />

      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export async function getServerSideProps(context: { query: { genre?: string } }) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre as keyof typeof requests]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results || [],
    },
  };
}
