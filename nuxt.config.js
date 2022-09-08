require("dotenv").config();

export default {
  head: {
    title: "KAI CHUN CHAN RESUME", //標題
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: "MOBILE APP ENGINNER ",
      },
      { name: "SEO KeyWord1", content: "Here" },
      { name: "SEO KeyWord2", content: "Here" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/google-fonts", '@nuxtjs/vuetify',],
  googleFonts: {
    download: true,
    families: {
      Lobster: {
        wght: [400],
      },
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
