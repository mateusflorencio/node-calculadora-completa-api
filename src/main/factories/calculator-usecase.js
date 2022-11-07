import { importOperations } from './import-operations.js'
import { CalculatorUsecase } from '../../domain/usecase/calculator/calculator-usecase.js'
import { equationsStrategy } from '../../domain/usecase/calculator/equations-strategy.js'

export const calculatorUsecaseFactory = async () => {
  const op = await importOperations()
  return CalculatorUsecase(equationsStrategy(op))
}
