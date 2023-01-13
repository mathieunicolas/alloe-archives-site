export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  css: ['@/assets/main.css'],
  content: {
    sources: {
      gh: {
        driver: 'github',
        repo: 'mathieunicolas/alloe',
        prefix: '/'
      }
    },
    navigation: {
      fields: ['auteur']
    }
  },
  nitro: {
    prerender: {
      routes: [
          '/alloe18'
      ]
    }
  }
})
