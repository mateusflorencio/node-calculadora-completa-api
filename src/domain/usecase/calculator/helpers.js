export const calc = (array, strategyOperation) => {
  while (array.length > 1) {
    if (array.includes('*') || array.includes('/')) {
      array.forEach((v, i, a) => {
        if (v === '*' || v === '/') array.splice(i - 1, 3, strategyOperation(a[i - 1], a[i], a[i + 1]))
      })
    } else {
      array.splice(0, 3, strategyOperation(...array))
    }
  }
  return array
}

export const calcWithParathenses = (array, strategyOperation) => {
  const eq = []
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
  array.splice(start, eq.length + 2, ...calc(eq, strategyOperation))
  return array
}
