import { FastifyInstance } from 'fastify'
import { makeCustomerController } from '../container-injection/make-customer-controller'

export async function appRouters(app: FastifyInstance) {
  app.post('/customer', makeCustomerController().handle)
}
