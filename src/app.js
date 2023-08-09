const fastify = require('fastify')({ logger: true })
const { join } = require('path')

const dotenv = require('dotenv')
dotenv.config()

fastify.register(require('@fastify/cors'))
fastify.register(require('@fastify/multipart'))
fastify.register(require('@fastify/static'), {
  root: join(__dirname, '..', 'storage'),
  prefix: '/storage/'
})
fastify.register(require('./controllers/UploadController'))

fastify.listen({ port: process.env.APP_PORT }, () =>
  console.log(`server is running in http://localhost:${process.env.APP_PORT}`)
)
