import { CalculatorController } from '../../application/controllers/calculator-controller.js'
import { validationFactory } from './validation-factory.js'
import { calculatorUsecaseFactory } from './calculator-usecase.js'
import { calculatorRepoFactory } from './calculator-repo.js'

export const calculatorControllerFactory = async () => {
  const calculatorUsecase = await calculatorUsecaseFactory()
  return new CalculatorController(validationFactory, calculatorUsecase, calculatorRepoFactory())
}
