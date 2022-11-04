export class Calculator {
  eq = []

  calc (equation) {
    if (equation) {
      this.eq = []
      this.explode(equation)
      this.verifyParentheses()
    } else {
      throw new Error('Missing Param')
    }
  }

  explode (equation) {
    while (equation.length > 0) {
      let toCut = 0
      const numbers = equation.match(/\d+/i)[0]
      if (numbers) {
        toCut = numbers.length
        this.eq.push(numbers)
      }
      const noNumbers = equation.match(/\D+/i)
      if (noNumbers) {
        toCut += noNumbers[0].length
        this.eq.push(...noNumbers[0].split(''))
      }

      equation = equation
        .split('')
        .splice(toCut)
        .join('')
    }
  }

  verifyParentheses () {
    const res = this.eq.join('').match(/[()]/g)
    if (res && res.length % 2 === 1) throw new Error('Mising Parentheses, verify equation')
  }
}
