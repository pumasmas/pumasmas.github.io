import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Pu++ Team'),
  }),
});

const wiki = defineCollection({
  type: 'content',
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
    prerequisites: z.array(z.string()).optional(), // Slugs of other wiki entries
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
