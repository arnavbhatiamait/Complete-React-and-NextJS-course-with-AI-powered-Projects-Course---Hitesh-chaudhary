import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
console.log('Database URL:', databaseUrl);
if (!databaseUrl) {
    throw new Error('Missing DATABASE_URL environment variable (lib/db/index.ts)');
}

const db = drizzle(postgres(databaseUrl));
export default db;

export { schema };
