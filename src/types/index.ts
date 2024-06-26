import * as v from 'valibot'
import { headlineSchema } from '../schema/schemas'

export type Headline = v.InferOutput<typeof headlineSchema>