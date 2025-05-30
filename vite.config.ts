import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		lib: {
			entry: path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/index.tsx'),
			name: 'solid-feather-icon',
			fileName: ($format) => `solid-feather-icon.${$format}.js`,
		},
		rollupOptions: {
			external: ['solid-js']
		}
	},
});
