export const databaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    dialect: 'postgres',
    query: {
        raw: true
    },
    dialectOptions: {
        connectTimeout: 2000
    },
    timezone: '+01:00'
};
