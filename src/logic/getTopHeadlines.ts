import * as v from 'valibot'
import { headlineSchema } from '../schema/schemas'

// Esta funcion obtiene los datos de topHeadlines de la API
export const fetchTopHeadlines = async()=> {
    try {
        console.log(import.meta.env.VITE_API_KEY)
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=14&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const {articles} = await response.json()
        const result = v.safeParse(headlineSchema ,articles)
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