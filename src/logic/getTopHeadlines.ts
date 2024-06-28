import * as v from 'valibot'
import { headlinesSchema } from '../schema/schemas'

// Esta funcion obtiene los datos de topHeadlines de la API
export const fetchTopHeadlines = async()=> {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const {articles} = await response.json()
        const result = v.safeParse(headlinesSchema ,articles)
        if (result.success) {
            return result
        }
        if (result.success) {
            throw new Error("The fetch petition is failed")
        }
    } catch (e) {
        console.log(e)
    }
    
}