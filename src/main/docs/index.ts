import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Template API',
    description: 'Documentation from Template API',
    version: '1.0.0'
  },
  servers: [{
    url: '/api',
    description: 'Main Route'
  }],
  paths,
  schemas
}
