import { CalculatorRepo } from '../../infra/repos/mariadb/calculator-repo.js'
export const calculatorRepoFactory = () => CalculatorRepo()
