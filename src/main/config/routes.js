import { Router } from 'express'
import { readdirSync } from 'fs'
import { dirname, join } from 'path'

export default (app) => {
  const router = Router()
  app.use('/api', router)
  readdirSync(join(dirname('.'), 'src/main/routes')).map(async file => {
    (await import(`../routes/${file}`)).default(router)
  })
}
