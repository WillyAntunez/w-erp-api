import dotenv from 'dotenv';

dotenv.config();

import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres(process.env.DB_CONNECTION_STRING!);
migrate(drizzle(migrationClient), 'src/server/migrations');

console.log(process.env.DB_CONNECTION_STRING);

const queryClient = postgres(process.env.DB_CONNECTION_STRING!);

export const db = drizzle(queryClient);

export const testDb = async () => {
    try {
        await db.execute(sql`SELECT 1`);
        console.log('Database connection test successful');
    } catch (error) {
        console.error('Error testing database connection: ');
        console.error(error);
    }
};

export default db;
