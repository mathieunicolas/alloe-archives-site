export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    'nuxt-content-assets', // make sure to add before content!
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
    output: '/[folder]/[file]',
    additionalExtensions: 'epub',
  },
  // nitro: {
  //   prerender: {
  //     routes: [
  //         '/alloe18'
  //     ]
  //   }
  // }
})
