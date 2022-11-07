import { LoadAllCalculeController } from '../../application/controllers/load-all-calcule-controller.js'
import { calculatorRepoFactory } from './calculator-repo.js'

export const loadAllCalculeController = () => LoadAllCalculeController(calculatorRepoFactory())
