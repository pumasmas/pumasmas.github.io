import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().default('Pu++ Team'),
    }),
});

const wiki = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/wiki',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z
      .enum([
        'Newbie',
        'Pupil',
        'Specialist',
        'Expert',
        'Candidate Master',
        'Master',
        'Grandmaster',
      ])
      .default('Newbie'),
    topic: z.string(),
    prerequisites: z.array(z.string()).optional(),
    lastUpdated: z.coerce.date().optional(),
    relatedProblems: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          platform: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog, wiki };
