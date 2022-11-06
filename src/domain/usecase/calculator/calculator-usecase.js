import { explode } from './explode'
import { calc, calcWithParathenses } from './helpers'

export const CalculatorUsecase = (equationsStrategy) => (equation) => {
  let array = explode(equation)
  while (array.length > 1) {
    if (array.includes('(')) {
      array = calcWithParathenses(array, equationsStrategy)
    } else {
      array = calc(array, equationsStrategy)
    }
  }
  return array[0]
}
