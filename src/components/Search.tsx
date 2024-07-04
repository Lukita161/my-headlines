import { useState } from "react"
import { useHeadlineContext } from "../hooks/useHeadlineContext"

export const Search = ()=> {
    const [input, setInput] = useState('')
    const { dispatch } = useHeadlineContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInput(e.target.value)

        setTimeout(()=> {
            dispatch({type: 'search-headlines', payload: {search: input}})
        }, 300)
}
    return (
        <div className="flex bg-dark-blue w-8/12 mx-auto h-[6rem] md:h-16 rounded shadow items-start justify-center">
            <form className="flex md:flex-row flex-col gap-5 p-2 items-center justify-center">
                <label htmlFor="headline" className="font-medium text-lg text-white"> Search headlines:</label>
                <input className="p-1 w-[16rem]" onChange={handleChange} type="text" name="headline" id="headline" placeholder="Biden, BBCNews, etc..." />
            </form>
        </div>
    )
}