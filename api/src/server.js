'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('../conf.json');
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const schema = require('./teachers/graphql/teacher-schema');
//const Teacher = require('./teachers/teacher.model');

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

// const auth0Config = require('../conf.json').auth0;
// const hapiAuthJWT = require('hapi-auth-jwt2');
// const jwksRsa = require('jwks-rsa');

const server = Hapi.server({
  port: config.port,
  host: config.host,
  routes: {
    cors: true
    }
});

// const validateUser = (decoded, request, callback) => {
//   console.log("Decoded", decoded);
//   if (decoded && decoded.sub) {
//     return callback(null, true, {});
//   }
//   return callback(null, false, {});
// };

const init = async () => {
  mongoose.connect(config.db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));
    
    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger, // http://localhost:3000/documentation
        options: {
          info: {
            title: 'API Documentation',
            version: '666'
          }
        }
      }
    ]);

    await server.register({
      plugin: graphqlHapi,
      options: {
        path: '/graphql',
        graphqlOptions: {
          schema
        }
      }
    })
    
    await server.register({
      plugin: graphiqlHapi,
      options: {
        path: '/graphiql',
        graphiqlOptions: {
          endpointURL: '/graphql'
        }
      }
    })


  // await server.register(hapiAuthJWT);
  // server.auth.strategy('jwt', 'jwt', {
  //   key: jwksRsa.hapiJwt2Key({
  //     cache: true,
  //     rateLimit: true,
  //     jwksRequestsPerMinute: 5,
  //     jwksUri: `${auth0Config.domain}/.well-known/jwks.json`
  //   }),
  //   verifyOptions: {
  //     audience: `${auth0Config.audience}`,
  //     issuer: `${auth0Config.domain}`,
  //     algorithms: ['RS256']
  //   },
  //   validate: validateUser
  // });
  // server.auth.default('jwt');

  await server.start();
  return server;
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


server.route(routes);

init()
  .then((server) => {
    console.log(`Server running at: ${server.info.uri}`);
  }).catch(err => console.log(err)

);