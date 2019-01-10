const fastify = require('fastify') ({
  logger: {
    prettyPrint: true
  }
})

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}

fastify.get('/',opts, async function(request,reply){
    reply.send("{Hello: World}");
  })

/*fastify.get('/', function (request,response){
  response.send({hello: 'world'})
})*/

const start = async() => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err);
    process.exit();
  }
}

start()
