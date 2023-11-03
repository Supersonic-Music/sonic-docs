import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/yuckdevchan/sonic-screwdriver',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'Getting Started', watch: true },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides', watch: true },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference', watch: true },
				},
			],
		}),
	],
});
