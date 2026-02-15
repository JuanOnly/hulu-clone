import Thumbnail, { MovieResult } from "./Thumbnail";
import FlipMove from "react-flip-move";

interface ResultsProps {
  results: MovieResult[];
  onMovieClick?: (movie: MovieResult) => void;
}

function Results({ results, onMovieClick }: ResultsProps) {
  return (
    <FlipMove className="px-5 my-10 sm:grid
        md:grid-cols-2 xl:grid-cols-3
        ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} onClick={onMovieClick} />
      ))}
    </FlipMove>
  )
}

export default Results
