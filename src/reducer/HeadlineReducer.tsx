import { FinallHeadline, Headlines } from '../types'
import { verifiedHeadlinesSchema } from '../schema/schemas'
import * as v from 'valibot'

export type Actions = 
{ type: 'get-top-headlines', payload: {result: Headlines}} |
{ type: 'set-error-in-top-headlines' }

export type initialStateType = {
    headlines: FinallHeadline
    error: boolean
}
/*const filterValidHeadlines = (array: Headlines)=> { //⚠️⚠️⚠️ El error del state viene de aca, solucionarlo urgente
    const filteredArray = array.filter(object => Object.values(object).every(value => value !== null && value !== undefined && value !== ''))
    const verifySchema = v.safeParse(verifiedHeadlinesSchema, filteredArray) 
    return verifySchema
}*/
const filterValidHeadlines = (array: Headlines) => {
    const filteredArray = array.filter(object => {
        const allValuesValid = Object.values(object).every(value => value !== null && value !== undefined)
        return allValuesValid
    })
    const verifySchema = v.safeParse(verifiedHeadlinesSchema, filteredArray)
    return verifySchema
}
export const initialState: initialStateType = {
    headlines:[],
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

    return state
}