import { CalculatorController } from '../../application/controllers/calculator-controller.js'
import { validationFactory } from './validation.js'
import { calculatorUsecaseFactory } from './calculator-usecase.js'
import { calculatorRepoFactory } from './calculator-repo.js'

export const calculatorControllerFactory = async () =>
  CalculatorController(
    validationFactory(),
    await calculatorUsecaseFactory(),
    calculatorRepoFactory()
  )
