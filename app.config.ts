export default defineAppConfig({
  docus: {
    title: 'alloé',
    description: 'Allez, on écrit !',
    image: 'https://raw.githubusercontent.com/mathieunicolas/alloe-site/main/public/og_image.png',
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
