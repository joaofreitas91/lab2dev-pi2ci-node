import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
})

const _env = envSchema.safeParse(process.env)

if (_env.error) {
  console.error('Environment validation error:', _env.error.format())
  throw new Error('Environment validation error')
}

export const env = _env.data
