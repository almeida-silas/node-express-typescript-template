import { Request, Response } from 'express'

export default class ExpressAdapter {
  create (handle: (params: any, bory: any) => Promise<Object>) {
    return async function (request: Request, response: Response) {
      const object = await handle(request.params, request.body)

      return response.json(object)
    }
  }
}
