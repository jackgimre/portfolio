import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticCopy from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		staticCopy({
			targets: [
				{
					src: 'src/assets/*',
					dest: 'dist/assets'
				}
			]
		})
	],
	server: {
		port: 3000
	},
	build: {
		assetsInclude: ['**/*.png']
	}
});
