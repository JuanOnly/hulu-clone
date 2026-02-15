import requests from "../../utils/requests";
import { useRouter } from "next/router";

interface RequestEntry {
    title: string;
    url: string;
}

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative" aria-label="Movie categories">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
      sm:space-x-20 overflow-x-scroll scrollbar-hide"
        role="list"
      >
        {Object.entries(requests).map(([key, value]: [string, RequestEntry]) => (
          <button
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 
          transform hover:scale-125 hover:text-white active:text-red-500 bg-transparent border-none text-inherit"
            role="listitem"
          >
            {value.title}
          </button>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" aria-hidden="true" />
    </nav>
  );
}

export default Nav;
