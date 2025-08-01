import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  vite: {
    plugins: [tsconfigPaths()]
  },

  modules: ['@nuxtjs/tailwindcss']
})