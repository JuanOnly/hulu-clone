import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

export interface MovieResult {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  title: string;
  original_name: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
}

interface ThumbnailProps {
  result: MovieResult;
}

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"
  const imageSrc = `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`;
  const title = result.title || result.original_name;

  return (
    <article
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 
        ease-in transform sm:hover:scale-105 hover:z-50 shadow-xl"
      role="article"
      aria-label={`${title} - ${result.media_type || 'Movie'}`}
      tabIndex={0}
    >
      <Image
        layout="responsive"
        src={imageSrc}
        height={1080}
        width={1920}
        alt={title}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all 
                duration-100 ease-in-out group-hover:font-bold">{title}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100" aria-label={`Type: ${result.media_type || 'Movie'}, Release: ${result.release_date || result.first_air_date}, Votes: ${result.vote_count}`}>
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <HandThumbUpIcon className="h-5 mx-2" aria-hidden="true" /> {result.vote_count}
        </p>
      </div>
    </article>
  )
})

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail
