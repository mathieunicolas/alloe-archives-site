export default defineAppConfig({
  docus: {
    title: 'alloé',
    description: 'Allez, on écrit !',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'mathieunicolas/alloe',
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
    },
    footer: {
      credits: {
        icon: 'Logo',
        text: 'Site par M. NICOLAS',
        href: 'https://alloe.fr',
      }
    }
  }
})
