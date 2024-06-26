import { useContext } from "react"
import { HeadlineContext } from "../context/HeadlineContext"

export const useHeadlineContext = ()=> {
    const context = useContext(HeadlineContext)
    if(!context) {
        throw new Error('The HeadlineContext Provider is required')
    }
    return context
}