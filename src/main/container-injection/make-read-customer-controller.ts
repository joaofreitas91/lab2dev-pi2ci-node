import { ReadCustomerController } from '../../infrastructure/controllers/read-customer-controller'
import { CustomerRepository } from '../../infrastructure/respositories/customer-repository'
import { ReadCustomerUseCase } from '../../usecases/read-customer-usecase'

export const makeCustomerReadController = () => {
  const repository = new CustomerRepository()
  const useCase = new ReadCustomerUseCase(repository)
  const controller = new ReadCustomerController(useCase)

  return { handle: controller.handle.bind(controller) }
}
