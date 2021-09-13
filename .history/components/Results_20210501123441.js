import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid-cols
        md:grid-col-3 xl:grid-cols-4 
        ">
            {results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Results
