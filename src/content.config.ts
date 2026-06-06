import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logCollection = defineCollection({
    // 1. En Astro moderno, para carpetas usamos el loader en vez de type: 'content'
    loader: glob({
        pattern: '**/index.md',
        base: './src/content/log'
    }),
    // 2. El esquema de validación queda impecable para procesar tus imágenes locales
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(), // Usamos z.coerce.date() para que transforme el texto del MD a objeto Date sin fallar
        category: z.string(),
        coverUrl: image(),
    }),
});

export const collections = {
    'log': logCollection,
};