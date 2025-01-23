import Fastify from 'fastify'
import { appRouters } from './routes'

export const app = Fastify()

app.register(appRouters)
