export const Calculator = (composite) => (array) => {
  while (array.length > 1) {
    if (array.includes('(')) {
      array = calcWithParathenses(array)
    } else {
      array = calc(array)
    }
  }
  function calcWithParathenses (array) {
    let eq = []
    let start = 0
    let end = null
    array.forEach((v, i) => {
      if (v === '(') start = i
    })
    for (let i = 0; i < array.length; i++) {
      if (!end && array[i] === ')' && i > start) end = i
    }
    for (let i = start + 1; i < end; i++) {
      eq.push(array[i])
    }
    const size = eq.length
    while (eq.length > 1) {
      eq = calc(eq)
    }
    array[start] = eq[0]
    array.splice(start + 1, size + 1)
    return array
  }

  function calc (array) {
    const equation = buidEquation(array)
    const res = composite(...equation)
    array[0] = res
    array.splice(1, 2)
    return array
  }
  function buidEquation (array, index) {
    const equation = []
    for (let i = index + 1 || 0; i < array.length; i++) {
      equation.push(array[i])
      if (equation.length === 3) break
    }
    return equation
  }
  return array[0]
}
