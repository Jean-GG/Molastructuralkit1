// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Colección para el Módulo Interactivo (Preguntas)
const questionsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        type: z.enum(['question', 'practice']).optional().default('question'),
        topic: z.string(),
        question: z.string(), // La pregunta va en el frontmatter (encabezado)
        answerTitle: z.string().optional(), // El título de la respuesta también
        videoId: z.string().optional(),
        nextQuestionId: z.string().optional(),
    }),
});

// 2. Colección para el Módulo Wiki (Artículos)
const wikiCollection = defineCollection({
    type: 'content', // Son archivos Markdown (.md)
    schema: z.object({
        title: z.string(),
        category: z.string(), // Ej: "Mecánica de Materiales"
        order: z.number(), // Para ordenar el índice (1.1, 1.2...)
    }),
});

// Exportar las colecciones
export const collections = {
    'questions': questionsCollection,
    'wiki': wikiCollection,
};