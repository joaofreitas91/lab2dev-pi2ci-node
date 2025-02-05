import { Customer } from '../domain/customer'
import { IReadAllCustomer } from '../infrastructure/respositories/customer-repository'

export interface IReadCustomerUseCase {
  execute(): Promise<void | Customer[]>
}

export class ReadCustomerUseCase implements IReadCustomerUseCase {
  constructor(private readonly repository: IReadAllCustomer) {}

  async execute(): Promise<void | Customer[]> {
    const customers = await this.repository.readAll()
    return customers
  }
}
