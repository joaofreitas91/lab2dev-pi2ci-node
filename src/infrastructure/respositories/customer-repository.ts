import { Customer } from '../../domain/customer'
import { prisma } from './prisma-client'

export interface ICreateCustomer {
  create: (name: string) => Promise<void>
}

export interface IFindFirstCustomer {
  findFirst: (name: string) => Promise<Customer | null>
}

export interface IReadAllCustomer {
  readAll: () => Promise<Customer[]>
}

export class CustomerRepository
  implements ICreateCustomer, IFindFirstCustomer, IReadAllCustomer
{
  async create(name: string): Promise<void> {
    await prisma.customer.create({
      data: {
        name,
      },
    })
  }

  async findFirst(name: string): Promise<Customer | null> {
    return await prisma.customer.findFirst({
      where: {
        name,
      },
    })
  }

  async readAll(): Promise<Customer[]> {
    return await prisma.customer.findMany()
  }
}
