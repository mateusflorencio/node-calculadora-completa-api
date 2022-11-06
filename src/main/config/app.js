import express from 'express'
import setupRoutes from './routes.js'
import setupMidlewares from './middlewares.js'

export const setupApp = async () => {
  const app = express()
  setupMidlewares(app)
  setupRoutes(app)
  return app
}
