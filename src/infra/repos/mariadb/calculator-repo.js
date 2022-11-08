import { DbSigleton } from './db-singleton.js'

export const CalculatorRepo = () => {
  return {
    save: async function (user, equation, result) {
      await DbSigleton.get().calculos.create({
        data: {
          equacao: equation,
          resultado: result.toString(),
          usuario: user
        }
      })
    },
    loadAll: async function (user) {
      return DbSigleton.get().calculos.findMany()
    }
  }
}
