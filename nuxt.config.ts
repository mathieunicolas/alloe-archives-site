export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  css: ['@/assets/main.css'],
  modules: [
    'nuxt-content-assets', // make sure to add before content!
    '@nuxt/content',
    '@nuxt/devtools',
    '@vite-pwa/nuxt'
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
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'alloé : allez, on écrit !',
      short_name: 'alloé',
      theme_color: '#ffffff',
      icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
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
  },
})
