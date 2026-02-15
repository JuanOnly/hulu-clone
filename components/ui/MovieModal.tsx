import { XMarkIcon, PlayIcon, PlusIcon, HandThumbUpIcon, StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { MovieResult } from './Thumbnail';

interface MovieModalProps {
  movie: MovieResult | null;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  if (!movie) return null;

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const backdropUrl = movie.backdrop_path 
    ? `${BASE_URL}${movie.backdrop_path}` 
    : movie.poster_path 
      ? `${BASE_URL}${movie.poster_path}` 
      : null;

  const title = movie.title || movie.original_name || 'Untitled';
  const year = (movie.release_date || movie.first_air_date || '').split('-')[0];
  const rating = movie.vote_count > 0 ? (movie.vote_count / 20).toFixed(1) : 'N/A';
  const mediaType = movie.media_type === 'tv' ? 'TV Show' : movie.media_type === 'movie' ? 'Movie' : 'Media';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl mx-4 bg-[#06202A] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {backdropUrl && (
          <div className="relative h-[300px] w-full">
            <Image
              src={backdropUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06202A] to-transparent" />
          </div>
        )}

        <div className="p-6 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              {movie.poster_path && (
                <Image
                  src={`${BASE_URL}${movie.poster_path}`}
                  alt={title}
                  width={150}
                  height={225}
                  className="rounded-lg shadow-lg hidden md:block"
                />
              )}
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-4">
                <span className="px-2 py-1 bg-green-600 text-white rounded text-xs font-bold">
                  {mediaType}
                </span>
                <span>{year}</span>
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span>{rating}/10</span>
                </div>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">HD</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {movie.overview || 'No description available.'}
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-colors">
                  <PlayIcon className="w-5 h-5" />
                  Play
                </button>
                <button className="bg-gray-600/50 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                  <PlusIcon className="w-6 h-6" />
                </button>
                <button className="bg-gray-600/50 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                  <HandThumbUpIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
