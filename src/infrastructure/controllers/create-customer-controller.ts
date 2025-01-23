import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { ICreateCustomerUseCase } from '../../usecases/create-customer-usecase'
import { IController } from './controller'

export class CreateCustomerController implements IController {
  constructor(private readonly useCase: ICreateCustomerUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      name: z.string(),
    })

    const body = bodySchema.safeParse(request.body)

    if (!body.success) {
      reply.status(400).send()
      return
    }

    try {
      const customers = await this.useCase.execute(body.data.name)
      if (customers) {
        reply.status(409).send()
        return
      }

      reply.status(201).send()
    } catch (error) {
      console.log(error)
      reply.status(500).send()
    }
  }
}
