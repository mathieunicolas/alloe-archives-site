export default defineAppConfig({
  docus: {
    title: 'alloé',
    description: 'Allez, on écrit ! Écriture collaborative',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_themes',
      github: 'nuxt-themes/docus',
    },
    aside: {
      level: 1,
      exclude: ['/readme']
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: ['/readme']
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        }
      ]
    }
  }
})
