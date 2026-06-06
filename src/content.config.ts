import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Cambió la procedencia del loader a 'astro/loaders'

const logCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		category: z.string(),
		coverUrl: image(),
	}),
});

export const collections = {
	'log': logCollection,
};