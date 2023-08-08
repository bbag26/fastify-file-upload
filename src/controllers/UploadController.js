module.exports = async fastify => {
  fastify.get('/', async (request, reply) => {
    reply.status(200).send({
      message: 'Hello, Upload!'
    })
  })
}
