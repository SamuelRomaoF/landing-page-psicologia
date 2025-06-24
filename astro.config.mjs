// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.drpsicologonome.com.br',
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
  ],
  vite: {
    build: {
      // Minificar o HTML/CSS/JS na build de produção
      minify: 'terser',
    },
    ssr: {
      // Evitar erros durante a geração estática
      noExternal: ['astro-seo'],
    },
  },
  // Configurações para otimizar imagens
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  // Controle fino sobre o formato de saída
  output: 'static',
});
