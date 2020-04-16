import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import hapiSwagger from 'hapi-swagger';
import { serverConfig, swaggerConfig } from './config';

import routes from './router';

const createServer = async () => {
    const server = new Hapi.Server(serverConfig);

    await server.register([
        inert,
        vision,
        {
            plugin: hapiSwagger,
            options: swaggerConfig,
        },
    ]);

    server.route(routes);

    server.events.on('start', () => {
        server.log('info', `Server is running on ${server.info.uri}`);
    });

    server.events.on('log', (event, tags) => {
        console.log(tags, event.data);
    });

    return server;
};

export default createServer;
