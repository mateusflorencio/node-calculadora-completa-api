import * as dotenv from 'dotenv'
import { setupApp } from './config/app.js'
import { DbSigleton } from '../infra/repos/mariadb/db-singleton.js'
dotenv.config()

const port = process.env.PORT
DbSigleton()
  .connect()
  .then(async () => {
    const app = await setupApp()
    app.listen(port || 3000, () => console.log(`Server running at http://localhost:${port}`))
  }).catch(console.log)
