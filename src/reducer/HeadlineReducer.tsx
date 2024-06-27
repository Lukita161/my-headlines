
import { FinallHeadline } from '../types'

export type Actions = 
{ type: 'get-top-headlines', payload: {result: FinallHeadline}} |
{ type: 'set-error-in-top-headlines' }

type initialStateType = {
    headlines: FinallHeadline
    error: boolean
}


export const initialState = {
    headlines: [],
    error: false
}

export const HeadlineReducer = (state: initialStateType = initialState, actions: Actions)=> {
    if(actions.type === 'get-top-headlines') { // Este action setea el state de topHeadlines desde una peticion fetch
        return {
            ...state,
            headlines: actions.payload.result
        }
    }
    if(actions.type === 'set-error-in-top-headlines') { // Si falla el fetch mostramos un error en App.tsx
        return {
            ...state,
            error: true
        }
    }

    return state
}