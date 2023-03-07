export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KG簡歷',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '半路出家工程師，透過自學而開啟一場工程師生涯。' },
      { hid: 'og:image', name: 'og:image', content: 'https://i.imgur.com/ArfYYvz.jpg' }, //精選圖片
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/KG.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],
  googleFonts: {
    families: {
      Lora: true,

    }
  },
  fontawesome: {
    solid: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  styleResources: {
    scss: [
      '~assets/styles/scss/mixins.scss',
    ]
  },
  generate: {
    routes: ['/']
  }

}
