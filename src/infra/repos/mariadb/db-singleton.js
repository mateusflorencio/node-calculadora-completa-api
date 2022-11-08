import { PrismaClient } from '@prisma/client'
export class DbSigleton {
  static async connect () {
    this.prisma = new PrismaClient()
    await this.prisma.$connect()
  }

  static get () {
    return this.prisma
  }
}
