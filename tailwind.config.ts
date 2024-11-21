import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			hostgrotesk: ["HostGrotesk", "sans'serif"]
		}
	},

	plugins: []
} satisfies Config;
