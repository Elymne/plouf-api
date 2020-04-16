import {createServer, database} from './core';

const start = async () => {
    // Server init
    const server = await createServer();
    await server.start();

    // Database init
    await database.sync({force: false});
};

start().catch(err => {
    throw err;
});
