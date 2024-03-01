import { Hono } from 'hono';

const movies = new Hono();

movies
	.get('/', (c) => c.text('Index'))
	.get('/:id', (c) => c.text(`Show ${c.req.param('id')}`))
	.post('/new', (c) => c.text('Post'))
	.put('/:id/update', (c) => c.text('Put'))
	.delete('/:id/destroy', (c) => c.text('Destroy'));

export default movies;
