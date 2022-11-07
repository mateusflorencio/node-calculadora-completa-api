import { routerAdapt } from '../adapters/router-adapt.js'
import { calculatorControllerFactory as calc } from '../factories/calculator-controller.js'
import { loadAllCalculeController as load } from '../factories/load-all-calcule-controller.js'

export default async (router) => {
  router.post('/calculator', routerAdapt(await calc()))
  router.get('/calculator', routerAdapt(load()))
}
