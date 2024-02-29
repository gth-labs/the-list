import type { LambdaEvent, LambdaContext } from 'hono/aws-lambda';
import { Hono } from 'hono';

type Bindings = {
	event: LambdaEvent;
	context: LambdaContext;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => c.text('Here we go!'));

export default app;
