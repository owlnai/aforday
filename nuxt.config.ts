// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@unocss/nuxt',
    '@nuxt/image-edge',
  ],
  css: ['@unocss/reset/tailwind.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://aforday.owln.ai',
      siteName: 'Aforday',
      siteDescription: 'La charla de Afor',
      language: 'es',
    },
  },
})
