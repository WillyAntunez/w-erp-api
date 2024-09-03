import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: ['./src/models'],
    out: './src/server/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DB_CONNECTION_STRING!,
    },
});
