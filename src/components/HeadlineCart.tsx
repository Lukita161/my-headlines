import { useHeadlineContext } from "../hooks/useHeadlineContext"
import { Headline } from "../types"

export const HeadlineCart = ()=> {
    const { state } = useHeadlineContext()

    const shortDescription = (description: Headline['description']) => {
        const shortyDescription = description.search(/[.,]/)
        const descriptions = description.slice(0, shortyDescription)
        return descriptions
    }
    return (
        <>
            {state.headlines.map(headline => (
                <div className="flex flex-col min-w-[22rem] min-h-[18rem] mb-4 justify-around flex-grow gap-5 bg-light-blue rounded-xl">
                    <h1 className="text-base text-pretty font-medium text-center mt-1 p-1">{headline.title}</h1>
                    <div className="">
                        <img className="object-cover" src={headline.urlToImage} alt="imagen" />
                    </div>
                    <p className="text-sm ml-2 text-wrap">{shortDescription(headline.description)}...</p>
                </div>
            ))}
        </>
    )
}
