import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { Env } from '../environment';

const client = createClient({
	url: Env.DB_URL,
	authToken: Env.DB_AUTH_TOKEN,
});
export const db = drizzle(client);
