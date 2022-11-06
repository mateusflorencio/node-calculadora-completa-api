import * as dotenv from 'dotenv'
import { setupApp } from './config/app.js'
dotenv.config()
const port = process.env.PORT;

(async () => {
  const app = await setupApp()
  app.listen(port || 3000, () => console.log(`Server running at http://localhost:${port}`))
})()
