import { FastifyInstance } from 'fastify'
import { makeCustomerController } from '../container-injection/make-customer-controller'
import { makeCustomerReadController } from '../container-injection/make-read-customer-controller'

export async function appRouters(app: FastifyInstance) {
  app.post('/customer', makeCustomerController().handle)
  app.get('/customer', makeCustomerReadController().handle)
}
