import * as v from 'valibot'

export const headlineSchema = v.array(
    v.object({
        author: v.nullable(v.string()),
        description: v.nullable(v.string()),
        title: v.nullable(v.string()),
        url: v.nullable(v.string()),
        urlToImage: v.nullable(v.string())
    })
)