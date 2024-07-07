import { useHeadlineContext } from "../../hooks/useHeadlineContext";
import { shortDescription } from "../../logic/filterHeadlines";
export const SearchedCart = () => {
  const { state } = useHeadlineContext();
  return (
		<>
      {state.searchedHeadlines.map(result => (
        <div
          key={result.title}
          className="flex flex-col min-w-[22rem] max-w-[35rem] max-h-[35rem] min-h-[18rem] mb-4 justify-around flex-grow gap-5 bg-light-blue rounded-xl"
        >
          <h1 className="text-base text-pretty font-medium text-center mt-1 p-1">
            {result.title}
          </h1>
          <div className="">
            <img
              className="object-cover max-h-full max-w-full"
              src={result.urlToImage}
              alt="imagen"
            />
          </div>
          <p className="text-sm ml-2 text-wrap">
            {result.description
              ? shortDescription(result.description)
              : "No hay descripcion disponible"}
            ...
          </p>
        </div>
      ))}
			</>
  );
};
