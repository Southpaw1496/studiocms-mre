import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"

const blog = defineCollection({
	loader: glob({pattern: "**/*.md", base: "src/data/"}),
})

export const collections = {blog}