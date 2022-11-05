export class Calculator {
  eq = []
  constructor (validations) {
    this.validations = validations
  }

  calc (equation) {
    const out = this.validations(equation)
    if (out instanceof Error) throw out
    this.explode(out)
  }

  explode (input) {
    while (input.length > 0) {
      let toCut = 0
      const numbers = input.match(/\d+/i)[0]
      if (numbers) {
        toCut = numbers.length
        this.eq.push(numbers)
      }
      const noNumbers = input.match(/\D+/i)
      if (noNumbers) {
        toCut += noNumbers[0].length
        this.eq.push(...noNumbers[0].split(''))
      }

      input = input
        .split('')
        .splice(toCut)
        .join('')
    }
  }
}
