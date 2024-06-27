import { ReactNode, createContext, useReducer } from "react";
import { Actions } from "../reducer/HeadlineReducer";
import { HeadlineReducer, initialState } from "../reducer/HeadlineReducer";
import { FinallHeadline } from "../types";

type HeadlineProps = {
    state: {
        headlines: FinallHeadline;
    }
    dispatch: React.Dispatch<Actions>
}
type HeadlineContextProps = {
    children: ReactNode
}
export const HeadlineContext = createContext<HeadlineProps>(null!)

export const HeadlineContextProvider = ({ children }:HeadlineContextProps)=> {
    const [state, dispatch] = useReducer(HeadlineReducer,initialState)
    return (
        <HeadlineContext.Provider value={{state, dispatch}}>
            {children}
        </HeadlineContext.Provider>
    )
}