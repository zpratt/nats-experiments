const Hemera = require('nats-hemera');
const topics = require('./topics');

const nats = require('nats').connect({
    url: process.env.NATS_URI
});


const hemera = new Hemera(nats, {
    logLevel: 'debug',
    childLogger: true,
    tag: topics.coffeeShopsReceiverTopic
});

async function start() {
    await hemera.ready();

    const topicPattern = {
        topic: topics.coffeeShopsReceiverTopic,
        cmd: 'add'
    };

    hemera.add(
        topicPattern,
        async function(req) {
            const {order} = req;

            console.log(`received order: ${order}`);

            return 'success';
        }
    );
}

start();