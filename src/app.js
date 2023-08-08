const fastify = require('fastify')
const dotenv = require('dotenv')

dotenv.config()

const app = fastify({ logger: true })

app.register(require('./controllers/UploadController'))

app.listen({ port: process.env.APP_PORT }, () =>
  console.log(`server is running in http://localhost:${process.env.APP_PORT}`)
)
