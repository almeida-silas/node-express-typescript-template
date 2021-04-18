import { Express, json } from 'express'

import cors from './cors'
import compress from './compression'

export default (app: Express): void => {
  app.use(json())
  app.use(cors)
  app.use(compress)
}
