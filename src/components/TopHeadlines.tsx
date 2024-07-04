import { HeadlineCart } from "./HeadlineCart"
import { useHeadlineContext } from "../hooks/useHeadlineContext"

export const TopHeadlines = ()=> {
    const { state } = useHeadlineContext() 
    return (
        <>
            <div className="border-b-4 border-light-blue p-4 flex justify-between items-center">
                <h1 className="text-white text-2xl mb-0 font-medium">Top Headlines</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-14 px-4 pb-2 overflow-x-scroll overflow-y-hidden space-x-10"> 
                    {state.headlines.length > 0 && (
                        <HeadlineCart />
                    )}
            </div>
        </>
    )
}