import { db } from './client';
import { movies } from './schema';

async function seed() {
	await db
		.insert(movies)
		.values([
			{ title: 'Star Wars' },
			{ title: 'Me, Myself, & Irene' },
			{ title: 'Star Trek' },
		]);
}

seed()
	.then(() => console.log('DB Seeded!'))
	.catch((e) => console.error('DB Seed error', e));
