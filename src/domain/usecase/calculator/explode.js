export function Explode (input) {
  const output = []
  while (input.length > 0) {
    let toCut = 0
    if (input[0] === '(') {
      toCut = noNumbers(input)
    } else {
      toCut = numbers(input)
      toCut += noNumbers(input)
    }
    input = input
      .split('')
      .splice(toCut)
      .join('')
  }
  function noNumbers (input) {
    const noNumbers = input.match(/\D+/i)
    if (noNumbers) {
      output.push(...noNumbers[0].split(''))
      return noNumbers[0].length
    }
    return 0
  }
  function numbers (input) {
    const numbers = input.match(/\d+/i)[0]
    if (numbers) { output.push(numbers) }
    return numbers.length
  }
  return output
}
