export class CalculatorController {
  constructor (validations, calculatorUsecase, calculatorRepo) {
    this.validations = validations
    this.calculatorUsecase = calculatorUsecase
    this.calculatorRepo = calculatorRepo
  }

  handle ({ user, equation }) {
    try {
      const out = this.validations(equation)
      if (out instanceof Error) throw out
      const res = this.calculatorUsecase(out)
      this.calculatorRepo.save(user, out, res)
      return {
        statusCode: 200,
        data: res
      }
    } catch (error) {
      return {
        statusCode: 500,
        data: error.message
      }
    }
  }
}
