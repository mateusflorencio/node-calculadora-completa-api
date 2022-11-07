import { PrismaClient } from '@prisma/client'

export const DbSigleton = () => {
  const prisma = new PrismaClient()
  return {
    connect: async function () {
      await prisma.$connect()
    },
    disconnect: async function () {
      await prisma.$disconnect()
    }
  }
}
