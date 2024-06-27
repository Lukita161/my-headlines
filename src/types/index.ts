import * as v from 'valibot'
import { HeadlineSchema, headlinesSchema, verifiedHeadlinesSchema } from '../schema/schemas'

export type Headlines = v.InferOutput<typeof headlinesSchema>

export type FinallHeadline = v.InferOutput<typeof verifiedHeadlinesSchema>

export type Headline = v.InferOutput<typeof HeadlineSchema>