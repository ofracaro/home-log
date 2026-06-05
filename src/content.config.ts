import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Cambió la procedencia del loader a 'astro/loaders'

const logCollection = defineCollection({
  // Esta es la sintaxis oficial actual para cargar colecciones de Markdown locales
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/log" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['audiovisual', 'investigacion', 'magazine', 'producto']),
    coverUrl: z.string(),
    rol: z.string().optional(),
    client: z.string().optional(),
  }),
});

export const collections = {
  'log': logCollection,
};