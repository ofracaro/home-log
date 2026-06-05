import { defineCollection, z } from 'astro:content';

const logCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Definimos los nichos usando un enumerador estricto
    category: z.enum(['audiovisual', 'investigacion', 'magazine', 'producto']),
    // URL de la imagen de portada o loop de video hospedado en Supabase/Cloudinary
    coverUrl: z.string(),
    // Campos opcionales (por si un videoclip lleva rol o cliente, pero una investigación no)
    rol: z.string().optional(),
    client: z.string().optional(),
  }),
});

export const collections = {
  'log': logCollection,
};