const fast = require("fastify")({ logger: true })

fast.get('/', function handler(request, reply) {
    reply.send({ hello: 'world' })
})


fast.listen({ port: 3000 }, (err) => {
    if (err) {
        fast.log.error(err)
        process.exit(1)
    }
})