import type { Config } from 'drizzle-kit';
import { Env } from './src/environment';

export default {
	schema: './src/db/schema.ts',
	out: './drizzle',
	driver: 'turso',
	dbCredentials: {
		url: Env.DB_URL,
		authToken: Env.DB_AUTH_TOKEN,
	},
} satisfies Config;
