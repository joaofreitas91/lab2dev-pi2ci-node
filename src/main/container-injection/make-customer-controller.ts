import { CustomerRepository } from '../../infrastructure/respositories/customer-repository'
import { CreateCustomerUseCase } from '../../usecases/create-customer-usecase'
import { CreateCustomerController } from '../../infrastructure/controllers/create-customer-controller'

export const makeCustomerController = () => {
  const repository = new CustomerRepository()
  const useCase = new CreateCustomerUseCase(repository, repository)
  const controller = new CreateCustomerController(useCase)
  return { handle: controller.handle.bind(controller) }
}
