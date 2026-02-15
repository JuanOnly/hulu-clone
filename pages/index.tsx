import Head from 'next/head';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Results from '../components/ui/Results';
import requests from '../utils/requests';
import { MovieResult } from '../components/ui/Thumbnail';

interface HomeProps {
  results: MovieResult[];
}

export default function Home({ results }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0 - Stream Movies & TV Shows</title>
        <meta name="description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone - built with Next.js and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hulu 2.0 - Stream Movies & TV Shows" />
        <meta property="og:description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hulu 2.0 Clone" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hulu 2.0 - Stream Movies & TV Shows" />
        <meta name="twitter:description" content="Browse and discover movies and TV shows with Hulu 2.0 Clone" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
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
      results: request.results,
    },
  };

}
