// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  imports: {
    autoImport: true
  },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/content'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})