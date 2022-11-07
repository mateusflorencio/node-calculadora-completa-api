export const CalculatorController = (validations, calculatorUsecase, calculatorRepo) => {
  return {
    handle: function ({ user, equation }) {
      try {
        const out = validations(equation)
        if (out instanceof Error) throw out
        const res = calculatorUsecase(out)
        calculatorRepo.save(user, out, res)
        return {
          statusCode: 200,
          data: res
        }
      } catch (error) {
        return {
          statusCode: 400,
          data: error.message
        }
      }
    }
  }
}
