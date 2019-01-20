const topics = require('../topics');

module.exports = {
    method: 'GET',
    path: '/api/add',
    handler: async (request) => {
        return request.hemera.act({
            topic: topics.coffeeShopsReceiverTopic,
            cmd: 'add'
        });
    }
};
