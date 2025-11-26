// @ts-check
import { defineConfig } from 'astro/config';
import remark from "@studiocms/markdown-remark"

// https://astro.build/config
export default defineConfig({
	integrations: [
		remark()
	],
	markdown: {
		syntaxHighlight: "prism"
	}
});
