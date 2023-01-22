export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxt/content'],
  css: ['@/assets/main.css'],
  content: {
    //ignores: ['.+\.(?:pdf|jpg|png|epub|excalidraw)'],
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
