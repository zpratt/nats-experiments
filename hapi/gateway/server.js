const Hapi = require('hapi');
const HapiHemera = require('hapi-hemera');
const addRoute = require('./routes/add');

const server = new Hapi.Server({
    port: 5000,
    host: "0.0.0.0",
    debug: { request: ['error'] }
});

async function start() {
    await server.register({
        plugin: HapiHemera,
        options: {
            hemera: {
                name: 'gateway',
                logLevel: 'debug',
                childLogger: true,
                tag: 'hemera-1'
            },
            nats: {
                url: process.env.NATS_URI
            }
        }
    });

    server.route(addRoute);

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
}

module.exports = start;