export function Explode (input) {
  const output = []
  while (input.length > 0) {
    let toCut = 0
    const numbers = input.match(/\d+/i)[0]
    if (numbers) {
      toCut = numbers.length
      output.push(numbers)
    }
    const noNumbers = input.match(/\D+/i)
    if (noNumbers) {
      toCut += noNumbers[0].length
      output.push(...noNumbers[0].split(''))
    }

    input = input
      .split('')
      .splice(toCut)
      .join('')
  }
  return output
}
