const Fastify = require('fastify');
const fastify = Fastify({
  logger: true
})

// Declare a route

const upstream = 'https://functions-custom-tyagi.harperdbcloud.com/ToDoApi/';

fastify.register(require('@fastify/http-proxy'), {
    upstream,
    prefix: '/api' // optional
  })
// Run the server!
fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})