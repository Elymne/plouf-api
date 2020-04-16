const databaseConfig = {
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    query: {
        raw: true,
    },
    dialectOptions: {
        connectTimeout: 2000,
    },
    timezone: '+01:00',
};

export default databaseConfig;
