import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const movies = sqliteTable('movies', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	hasWatched: integer('has_watched', { mode: 'boolean' })
		.notNull()
		.default(false),
	likedOn: integer('liked_on', { mode: 'timestamp' }),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
	updateAt: integer('updated_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
});

export const insertMovieSchema = createInsertSchema(movies, {
	title: (schema) => schema.title.min(2, 'Movie title required'),
});
