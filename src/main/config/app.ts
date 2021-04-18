import express from 'express'
import 'dotenv/config'

import setupRoutes from './routes'
import setupSwagger from './swagger'
import setupMiddlewares from './middlewares'

const app = express()

setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)

export default app
