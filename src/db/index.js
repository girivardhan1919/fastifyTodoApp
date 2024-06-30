const fp = require('fastify-plugin');

async function database(fastify, options) {
  fastify.decorate('db', {
    todos: []
  })
}

module.exports = fp(database);