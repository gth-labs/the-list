import type { LambdaEvent, LambdaContext } from 'hono/aws-lambda';
import { Hono } from 'hono';
import movies from './movies';

type Bindings = {
	event: LambdaEvent;
	context: LambdaContext;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => c.redirect('/movies'));
app.route('/movies', movies);

export default app;
