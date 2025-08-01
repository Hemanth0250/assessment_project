// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [],

  app: {
    head: {
      title: 'Dewi Nuxt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})