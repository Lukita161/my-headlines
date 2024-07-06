import * as v from 'valibot'
import { headlinesSchema, SearchedHeadlineSchema } from '../schema/schemas'


// Esta funcion obtiene los datos de topHeadlines de la API
export const fetchTopHeadlines = async()=> {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const {articles} = await response.json()
        const result = v.safeParse(headlinesSchema ,articles)
        if (result.success) {
            return result
        }
    } catch (e) {
        console.log(e)
    }
}

export const fetchSearchedHeadlines = async(search: string)=> {
    try {
        const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const {articles} = await response.json()
        const result = v.safeParse(SearchedHeadlineSchema, articles)
        if (result.success) {
            return result
        }
    } catch {
        console.log('')
    }
}