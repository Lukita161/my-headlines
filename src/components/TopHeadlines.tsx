import { HeadlineCart } from "./HeadlineCart"

export const TopHeadlines = ()=> {
    return (
        <>
            <div className="border-b-4 border-light-blue p-4 flex justify-between items-center">
                <h1 className="text-white text-2xl mb-0 font-medium">Top Headlines</h1>
                <div className="flex items-center gap-4">
                    <h3 className="text-white font-medium">Filtrar por pais: </h3>
                    <select name="country" id="country">
                        <option> Pais </option>
                    </select>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row w-full mt-14 px-4 pb-2 overflow-x-scroll overflow-y-hidden space-x-10"> 
                    <HeadlineCart />
            </div>
        </>
    )
}