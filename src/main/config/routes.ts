import { Express, Router } from 'express'
import { readdirSync } from 'fs'

import path from 'path'

export default (app: Express): void => {
  const router = Router()

  app.use('/api', router)

  // importing all routes from the src/main/routes folder
  readdirSync(path.resolve('src','main', 'routes')).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
