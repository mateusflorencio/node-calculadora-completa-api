export class CalculatorController {
  constructor (validations, calculatorUsecase) {
    this.validations = validations
    this.calculatorUsecase = calculatorUsecase
  }

  handle (equation) {
    const out = this.validations(equation)
    if (out instanceof Error) throw out
    this.calculatorUsecase(out)
  }
}
