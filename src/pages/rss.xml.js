import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const ideas = (await getCollection("ideas")).filter(i => !i.data.draft);
  const articles = (await getCollection("articles")).filter(a => !a.data.draft);

  const items = [
    ...ideas.map(i => ({
      title: `Idea: ${i.data.title}`,
      description: i.data.summary,
      link: `/ideas/${i.slug}`,
      pubDate: i.data.date,
    })),
    ...articles.map(a => ({
      title: a.data.title,
      description: a.data.summary,
      link: `/articles/${a.slug}`,
      pubDate: a.data.date,
    })),
  ].sort((a,b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  return rss({
    title: "Your Name — Ideas & Articles",
    description: "Inventions, concepts, and notes.",
    site: context.site,
    items
  });
}
