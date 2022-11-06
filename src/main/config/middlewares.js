import { json } from 'express'
import cors from 'cors'

export default (app) => {
  app.use(json())
  app.use(cors())
}
