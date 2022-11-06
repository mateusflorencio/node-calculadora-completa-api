export function explode (input) {
  const output = []
  let numbers = []

  input.split('').forEach(i => {
    const matchNum = i.match(/\d/g)
    const matchNoNum = i.match(/\D/g)
    if (matchNum || i === '.') {
      numbers.push(i)
    } else {
      if (numbers.length > 0) output.push(numbers.join(''))
      numbers = []
    }
    if (matchNoNum && i !== '.') output.push(i)
  })

  if (numbers.length > 0) output.push(numbers.join(''))

  return output
}
