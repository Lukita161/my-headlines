import { verifiedHeadlinesSchema } from "../schema/schemas"
import { Headline } from "../types"
import { Headlines } from "../types"
import * as v from 'valibot'
export const filterValidHeadlines = (array: Headlines) => {
    const filteredArray = array.filter(object => {
        const allValuesValid = Object.values(object).every(value => value !== null && value !== undefined)
        return allValuesValid
    })
    const verifySchema = v.safeParse(verifiedHeadlinesSchema, filteredArray)
    return verifySchema
}


export const shortDescription = (description: Headline['description']) => {
    const shortyDescription = description.search(/[.,]/)
    const descriptions = description.slice(0, shortyDescription)
    return descriptions
}