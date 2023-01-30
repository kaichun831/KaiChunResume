export default {
  target: 'static',
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

  plugins: [

  ],
  components: true,
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/google-fonts", '@nuxtjs/vuetify',],
  googleFonts: {
    download: true,
    families: {
      Lobster: {
        wght: [400],
      },
    },
  },
  modules: [],
  build: {},
  server: {
    port: 59976, // default: 3000
    host: 'localhost' // default: localhost
  },

};
