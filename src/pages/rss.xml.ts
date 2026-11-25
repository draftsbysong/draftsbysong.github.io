import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostSlug, getPublishedPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'Drafts by Song',
    description: 'Working drafts, notes, and essays by Song.',
    site: context.site ?? 'https://draftsbysong.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `/posts/${getPostSlug(post.id)}/`,
    })),
  });
}
