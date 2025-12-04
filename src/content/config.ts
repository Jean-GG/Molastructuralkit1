// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Colección para el Módulo Interactivo (Preguntas)
const questionsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        topic: z.string(),
        question: z.string(),
        answerTitle: z.string(),
        answerDetail: z.string(),
        videoId: z.string().optional(),
        imgPlaceholder: z.string().optional(), // Nuevo campo para el nombre de la imagen
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