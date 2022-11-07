import { routerAdapt } from '../adapters/router-adapt.js'
import { calculatorControllerFactory } from '../factories/calculator-controller.js'

export default async (router) => {
  router.post('/calculator', routerAdapt(await calculatorControllerFactory()))
}
