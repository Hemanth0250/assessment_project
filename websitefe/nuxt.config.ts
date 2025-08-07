import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  ssr: true, // Set to false if you want to host a static SPA
  css: [
    '@/assets/css/tailwind.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  vite: {
    plugins: [tsconfigPaths()]
  },

  app: {
    head: {
      title: 'dewi', // 🔹 Change Tab Title Here
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://cdn-icons-png.flaticon.com/512/2824/2824362.png' // 🔹 Tab Icon
        }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})
