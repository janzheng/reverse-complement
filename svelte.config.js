// import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(), 
	kit: {
		// adapter: adapter(),
    adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '@lib': path.resolve('./src/lib'),
          '@plasmid': path.resolve('./src/plasmid'),
          '@modules': path.resolve('./node_modules'),
        }
      }
    }
	}
};

export default config;

