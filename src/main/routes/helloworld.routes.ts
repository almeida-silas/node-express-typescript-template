import { Router, Request, Response } from 'express'

export default (router: Router): void => {
  router.get('/helloWorld', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' })
  })
}
