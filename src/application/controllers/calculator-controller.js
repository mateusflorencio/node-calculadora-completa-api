export class CalculatorController {
  constructor (validations) {
    this.validations = validations
  }

  handle (equation) {
    const out = this.validations(equation)
    if (out instanceof Error) throw out
  }
}
