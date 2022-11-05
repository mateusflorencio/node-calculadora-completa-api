export class Calculator {
  constructor (validations, explode) {
    this.validations = validations
    this.explode = explode
  }

  handle (equation) {
    const out = this.validations(equation)
    if (out instanceof Error) throw out
    this.eq = this.explode(out)
  }
}
