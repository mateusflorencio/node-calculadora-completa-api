export class CalculatorController {
  constructor (validations, calculatorUsecase, calculatorRepo) {
    this.validations = validations
    this.calculatorUsecase = calculatorUsecase
    this.calculatorRepo = calculatorRepo
  }

  handle ({ user, equation }) {
    const out = this.validations(equation)
    if (out instanceof Error) throw out
    const res = this.calculatorUsecase(out)
    this.calculatorRepo.save(user, out, res)
  }
}
