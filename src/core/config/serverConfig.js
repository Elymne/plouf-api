const serverConfig = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    routes: {
        cors: {
            origin: ['*'],
        },
    },
};

export default serverConfig;
