import { app } from './api/app'
import { env } from './config/env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running at http://localhost:${env.PORT}`)
  })
