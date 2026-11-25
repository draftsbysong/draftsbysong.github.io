import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export function getPostSlug(id: string): string {
  return id.replace(/\/index$/, '');
}

export async function getPublishedPosts(): Promise<PostEntry[]> {
  const all = await getCollection('posts', ({ data }) => data.published !== false);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatShortDate(date: Date): string {
  const iso = date.toISOString();
  return `${iso.slice(5, 7)}-${iso.slice(8, 10)}`;
}

export function estimateReadingMinutes(body: string | undefined): number {
  if (!body) return 1;
  const plain = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_\-\[\]()]/g, ' ');
  const cjkCount = (plain.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
  const latinWords = plain
    .replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = cjkCount / 350 + latinWords / 220;
  return Math.max(1, Math.round(minutes));
}
