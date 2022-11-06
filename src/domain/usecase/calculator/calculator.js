import { calc, calcWithParathenses } from './help'

export const Calculator = (strategyOperation) => (array) => {
  while (array.length > 1) {
    if (array.includes('(')) {
      array = calcWithParathenses(array, strategyOperation)
    } else {
      array = calc(array, strategyOperation)
    }
  }
  return array[0]
}
