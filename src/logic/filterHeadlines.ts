import { verifiedHeadlinesSchema } from "../schema/schemas"
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