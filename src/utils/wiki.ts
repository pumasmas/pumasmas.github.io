import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Fetches the latest wiki entries sorted by last updated date.
 * @param count The number of entries to return.
 * @returns A promise that resolves to an array of wiki entries.
 */
export async function getLatestWikiEntries(count: number = 3): Promise<CollectionEntry<'wiki'>[]> {
  const entries = await getCollection('wiki');

  return entries
    .sort((a, b) => {
      const dateA = a.data.lastUpdated?.valueOf() ?? 0;
      const dateB = b.data.lastUpdated?.valueOf() ?? 0;
      return dateB - dateA;
    })
    .slice(0, count);
}
