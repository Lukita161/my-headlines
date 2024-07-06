import { FinallHeadline, Headlines, SearchedHeadline } from '../types'
import { filterValidHeadlines } from '../logic/filterHeadlines'

export type Actions = 
{ type: 'get-top-headlines', payload: {result: Headlines}} |
{ type: 'set-error-in-top-headlines' } |
{type: 'search-headlines', payload: {response: SearchedHeadline}}

export type initialStateType = {
    headlines: FinallHeadline
    searchedHeadlines: FinallHeadline
    error: boolean
}

export const initialState: initialStateType = {
    headlines:[],
    searchedHeadlines: [],
    error: false
}

export const HeadlineReducer = (state: initialStateType = initialState, actions: Actions)=> {
    if(actions.type === 'get-top-headlines') { // Este action setea el state de topHeadlines desde una peticion fetch
        const validHeadlines = filterValidHeadlines(actions.payload.result)
        return {
            ...state,
            headlines: validHeadlines.output
        }
    }
    if(actions.type === 'set-error-in-top-headlines') { // Si falla el fetch mostramos un error en App.tsx
        return {
            ...state,
            headlines: [],
            error: true
        }
    }
    if(actions.type === 'search-headlines') { // Cambiar la logica, aca setear directamente la busqueda, y ejecutar la busqueda en si en el componente Search
        
        return {
            ...state,
            searchedHeadlines: actions.payload.response
        }
    }

    return state
}