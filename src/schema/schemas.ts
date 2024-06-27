import * as v from 'valibot'

export const headlinesSchema = v.array(
    v.object({
        author: v.nullable(v.string()),
        description: v.nullable(v.string()),
        title: v.nullable(v.string()),
        url: v.nullable(v.string()),
        urlToImage: v.nullable(v.string())
    })
)

export const verifiedHeadlinesSchema = v.array(
    v.object({
        author: v.string(),
        description: v.string(),
        title: v.string(),
        url: v.string(),
        urlToImage: v.string()
    })
)

export const HeadlineSchema = v.object({
    author: v.string(),
        description: v.string(),
        title: v.string(),
        url: v.string(),
        urlToImage: v.string()
})