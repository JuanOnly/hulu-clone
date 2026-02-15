import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { MovieResult } from './Thumbnail';

interface HeroBannerProps {
  results: MovieResult[];
  onMovieClick: (movie: MovieResult) => void;
}

export default function HeroBanner({ results, onMovieClick }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [results.length]);

  const current = results[currentIndex];
  if (!current) return null;

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const backdropUrl = current.backdrop_path 
    ? `${BASE_URL}${current.backdrop_path}` 
    : current.poster_path 
      ? `${BASE_URL}${current.poster_path}` 
      : null;

  if (!backdropUrl) return null;

  const title = current.title || current.original_name || 'Untitled';
  const year = (current.release_date || current.first_air_date || '').split('-')[0];

  return (
    <div className="relative h-[56.25vw] min-h-[300px] max-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backdropUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06202A] via-[#06202A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06202A] via-transparent to-transparent" />
      </div>

      <div className="absolute top-[30%] ml-4 md:ml-16 w-full max-w-2xl z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
        
        {current.overview && (
          <p className="text-white text-sm md:text-lg mt-4 line-clamp-3 max-w-lg drop-shadow-md">
            {current.overview}
          </p>
        )}

        <div className="flex flex-row gap-4 mt-6">
          <button 
            onClick={() => onMovieClick(current)}
            className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            <PlayIcon className="w-5 h-5" />
            Play
          </button>
          <button 
            onClick={() => onMovieClick(current)}
            className="bg-gray-500/70 hover:bg-gray-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            <InformationCircleIcon className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {results.slice(0, 5).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
