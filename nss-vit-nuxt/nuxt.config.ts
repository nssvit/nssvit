// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/sitemap'
  ],
  
  // Content module configuration
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    navigation: {
      fields: ['title', 'description', 'pageTitle', 'ogImage', 'twitterImage']
    },
    highlight: {
      theme: 'github-dark'
    }
  },
  
  // Sitemap configuration
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://nssvit.org',
    gzip: true,
    exclude: ['/admin', '/admin/**', '/api/**']
  },
  
  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  
  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'NSS VIT',
      meta: [
        { name: 'description', content: 'National Service Scheme - Vidyalankar Institute of Technology' },
        { name: 'theme-color', content: '#0369a1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})