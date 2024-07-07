import { useHeadlineContext } from "../hooks/useHeadlineContext"
import { shortDescription } from "../logic/filterHeadlines"

export const HeadlineCart = ()=> {
    const { state } = useHeadlineContext()


    return (
        <>
            {state.headlines.map(headline => (
                <div key={headline.title} className="flex flex-col min-w-[22rem] min-h-[18rem] mb-4 justify-around flex-grow gap-5 bg-light-blue rounded-xl">
                    <h1 className="text-base text-pretty font-medium text-center mt-1 p-1">{headline.title}</h1>
                    <div className="">
                        <img className="object-cover" src={headline.urlToImage} alt="imagen" />
                    </div>
                    <p className="text-sm ml-2 text-wrap">{headline.description ? shortDescription(headline.description): 'No hay descripcion disponible'}...</p>
                </div>
            ))}
        </>
    )
}
