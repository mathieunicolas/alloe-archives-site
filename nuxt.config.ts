export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    'nuxt-content-assets',
    '@nuxt/content'
  ],
  css: ['@/assets/main.css'],
  content: {
    sources: {
      gh: {
        driver: 'github',
        repo: 'mathieunicolas/alloe',
        dir: '/',
        prefix: '/'
      }
    },
    navigation: {
      fields: ['auteur']
    }
  },
  'content-assets': {
    // imageSize: 'attrs'
  }
  // nitro: {
  //   prerender: {
  //     routes: [
  //         '/alloe18'
  //     ]
  //   }
  // }
})
