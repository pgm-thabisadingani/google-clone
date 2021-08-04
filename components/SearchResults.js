import PaginationsButtons from "./PaginationsButtons";

export default function SearchResults({ results }){
  //the highlight of this page is classname="group" you crreated here and use it here
  return (
    <div className=" mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results 
        ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a className="text-sml" href={result.link}>{result.formattedUrl}</a>
            <a href={result.link}> 
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2" >{result.snippet}</p>
        </div>
      ))}

      <PaginationsButtons />
    </div>
  )
}

