export const helloWorldPath = {
  get: {
    tags: ['Hello World'],
    summary: 'Template path',
    description: 'This route can be called by any user',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/helloWorld'
            }
          }
        }
      }
    }
  }
}
