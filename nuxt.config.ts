export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  css: ['@/assets/main.css'],
  modules: [
    'nuxt-content-assets', // make sure to add before content!
    '@nuxt/content',
    '@nuxt/devtools',
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Amaranth%3Aital%2Cwght%400%2C400%3B0%2C700%3B1%2C400%3B1%2C700&amp;display=swap"
        }
      ]
    },
  },
  content: {
    sources: {
      github: {
        prefix: '/', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "mathieunicolas/alloe",
        branch: "main",
        dir: "/", // Directory where contents are located. It could be a subdirectory of the repository.
        // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
      },
    }
  }
})
