export default defineAppConfig({
  docus: {
    title: 'alloé',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'mathieunicolas/alloe',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: {
        light: '/logo-light.png',
        dark: '/logo-dark.png'
      },
      showLinkIcon: true,
      exclude: ['/readme'],
      fluid: true
    }
  }
})
