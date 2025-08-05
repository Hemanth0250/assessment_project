import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  vite: {
    plugins: [tsconfigPaths()]
  },

  modules: ['@nuxtjs/tailwindcss']
})