import { FastifyInstance } from 'fastify'
import { makeCustomerController } from '../container-injection/make-customer-controller'
import { makeCustomerReadController } from '../container-injection/make-read-customer-controller'

export async function appRouters(app: FastifyInstance) {
  app.post('/customers', makeCustomerController().handle)
  app.get('/customers', makeCustomerReadController().handle)

  app.get('/health', async () => {
    return { status: 'ok' }
  })
}
