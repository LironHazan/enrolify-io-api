'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const routes = require('./api/routes');
const config = require('./conf.json');

const server = Hapi.server({
  port: config.port,
  host: config.host
});

const init = async () => {
  mongoose.connect(config.db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


server.route(routes);

init();