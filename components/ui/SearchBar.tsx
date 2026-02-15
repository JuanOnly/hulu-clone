import { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { MovieResult } from './Thumbnail';

interface SearchBarProps {
  onMovieClick: (movie: MovieResult) => void;
}

export default function SearchBar({ onMovieClick }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MovieResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const searchMovies = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data.results?.slice(0, 8) || []);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(searchMovies, 400);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (movie: MovieResult) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    onMovieClick(movie);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="flex items-center bg-[#06202A] rounded-full border border-white/20 px-4 py-2">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search movies & TV shows..."
          className="bg-transparent border-none outline-none text-white ml-2 w-48 md:w-64 placeholder-gray-400"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              inputRef.current?.focus();
            }}
          >
            <XMarkIcon className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        )}
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full mt-2 w-full min-w-[300px] md:w-[400px] bg-[#06202A] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50">
          {isLoading ? (
            <div className="p-4 text-gray-400 text-center">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((movie) => {
                const title = movie.title || movie.original_name || 'Untitled';
                const year = (movie.release_date || movie.first_air_date || '').split('-')[0];
                const posterUrl = movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` 
                  : null;

                return (
                  <li key={movie.id}>
                    <button
                      onClick={() => handleSelect(movie)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-white/10 transition-colors text-left"
                    >
                      {posterUrl ? (
                        <Image
                          src={posterUrl}
                          alt={title}
                          width={40}
                          height={60}
                          className="rounded object-cover"
                        />
                      ) : (
                        <div className="w-[40px] h-[60px] bg-gray-700 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-400">N/A</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{title}</p>
                        <p className="text-gray-400 text-sm">
                          {year} • {movie.media_type === 'tv' ? 'TV Show' : 'Movie'}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-4 text-gray-400 text-center">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
