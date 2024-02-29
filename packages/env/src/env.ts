import { parseEnv } from 'znv';
import { z } from 'zod';

export function getCdkEnv(e: NodeJS.ProcessEnv) {
	const Environment = parseEnv(e, {
		AWS_ACCOUNT_ID: z.string(),
		AWS_REGION: z.string().default('us-west-1'),
	});
	return Environment;
}

export function getLambdaEnv(e: NodeJS.ProcessEnv) {
	const Environment = parseEnv(e, {
		DB_URL: z.string().url(),
		DB_AUTH_TOKEN: z.string(),
	});
	return Environment;
}
