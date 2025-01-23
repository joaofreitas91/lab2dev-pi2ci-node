import {
  ICreateCustomer,
  IFindFirstCustomer,
} from '../infrastructure/respositories/customer-repository'

export interface ICreateCustomerUseCase {
  execute(name: string): Promise<void | string>
}

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    private readonly createRepository: ICreateCustomer,
    private readonly findRepository: IFindFirstCustomer,
  ) {}

  async execute(name: string): Promise<void | string> {
    const hasCustomer = await this.findRepository.findFirst(name)

    if (hasCustomer) {
      return 'Customer already exists'
    }

    await this.createRepository.create(name)
  }
}
