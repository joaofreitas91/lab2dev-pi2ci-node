import { FastifyRequest, FastifyReply } from 'fastify'

import { IController } from './controller'
import { IReadCustomerUseCase } from '../../usecases/read-customer-usecase'

export class ReadCustomerController implements IController {
  constructor(private readonly useCase: IReadCustomerUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const customers = await this.useCase.execute()
      if (!customers) {
        reply.status(404).send()
        return
      }
      reply.status(200).send(customers)
    } catch (error) {
      console.log(error)
      reply.status(500).send()
    }
  }
}
