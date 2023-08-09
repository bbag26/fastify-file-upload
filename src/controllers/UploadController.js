const uploader = require('../services/uploader')
const prisma = require('../services/prisma')

module.exports = async fastify => {
  fastify.get('/uploads', async (request, reply) => {
    const find = await prisma.upload.findMany()
    const uploads = []

    find.forEach(({ id, name, filePath, ...data }) => {
      const uri = `${process.env.APP_URL}:${process.env.APP_PORT}/${filePath}`
      uploads.push({ id, name, filePath: uri, ...data })
    })

    reply.status(200).send({
      data: uploads
    })
  })

  fastify.post('/uploads/store', async (request, reply) => {
    try {
      const data = await request.file()
      const name = data.fields.name.value

      const { uploaded, filePath } = await uploader(data.file, data.filename)

      if (uploaded) {
        const upload = await prisma.upload.create({
          data: {
            name,
            filePath
          }
        })

        reply.status(200).send({
          data: upload
        })
      }
    } catch (err) {
      reply.status(422).send({
        data: err
      })
    }
  })
}
