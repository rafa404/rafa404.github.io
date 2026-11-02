import rss from '@astrojs/rss';
import { publications } from '../data/publications';
import { site } from '../data/site';

export function GET(context: { site: URL | undefined }) {
  const items = publications
    .filter((publication) => publication.status === 'Published' && publication.publishedDate)
    .map((publication) => ({
      title: publication.title,
      description: publication.abstract,
      pubDate: new Date(`${publication.publishedDate}T00:00:00Z`),
      link: `/publications/${publication.id}/`,
      categories: publication.areas,
    }));

  return rss({
    title: `${site.name} — Publications`,
    description: 'Verified published research in medical image analysis, federated learning, and trustworthy AI.',
    site: context.site ?? site.url,
    items,
    customData: '<language>en-us</language>',
  });
}
