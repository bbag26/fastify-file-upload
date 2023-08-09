const fastify = require('fastify')
const cors = require('@fastify/cors')
const multipart = require('@fastify/multipart')
const static = require('@fastify/static')
const { join } = require('path')

const dotenv = require('dotenv')

dotenv.config()

const app = fastify({ logger: true })

app.register(cors)
app.register(multipart)
app.register(static, {
  root: join(__dirname, '..', 'storage'),
  prefix: '/storage/'
})
app.register(require('./controllers/UploadController'))

app.listen({ port: process.env.APP_PORT }, () =>
  console.log(`server is running in http://localhost:${process.env.APP_PORT}`)
)
