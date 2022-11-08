import * as dotenv from 'dotenv'
import { DbSigleton } from '../infra/repos/mariadb/db-singleton.js'
import { setupApp } from './config/app.js'
dotenv.config()

const port = process.env.PORT
DbSigleton.connect().then(async () => {
  const app = await setupApp()
  app.listen(port || 3000, () =>
    console.log(`Server running at http://localhost:${port}`)
  )
})
