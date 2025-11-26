import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { render } from "studiocms:markdown-remark";

let posts = await getCollection("blog");

export async function GET() {
	const rssItems: RSSFeedItem[] = await Promise.all(posts.map(async (post) => ({
		content: (await render(post.body ?? "")).html.toString()
	})))
	return rss({
		// `<title>` field in output xml
		title: "A blog",
		// `<description>` field in output xml
		description: "This is a blog",
		// base URL for RSS <item> links
		site: "http://localhost:4321",
		// list of `<item>`s in output xml
		items: rssItems,
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
}