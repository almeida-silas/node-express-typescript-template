import request from 'supertest'

import app from '../../src/main/config/app'

describe('Hello World', () => {
  it('should be receive "Hello World!"', async () => {
    const response = await request(app).get('/api/helloWorld')

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello World!')
  })
});
