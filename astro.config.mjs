import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    icon({
      iconDir: "src/icons",
    })
  ],
  output: 'static',

  // Site y Base son para colocar un Build en producción - En este caso también configurar HOME_URL en .env
  // Aqui va el dominio
  // site: 'http://localhost:4321',
  site: 'https://bulladvisors.com.uy',

  // Aqui va el folder, en caso de root -> /
  // base: '/',
  base: '/',

  adapter: netlify(),
  prefetch: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    'fallback':{
      en:'es'
    }
  }
});