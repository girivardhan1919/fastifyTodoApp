const fp = require('fastify-plugin');
const apiRouter = require('./routes/apiRouter');
const database = require('./db/index');
const todoRepository = require('./repository/todoRepository');
const todoService = require('./services/todoService');
async function app(fastify, options) {
  await fastify.register(database);
  await fastify.register(todoRepository);
  await fastify.register(todoService);

  await fastify.register(apiRouter, { prefix: '/api' });
}

module.exports = fp(app);