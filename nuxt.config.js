const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "qonfucius-nuxt-fontawesome"
  ],

  /*
   ** Fontawesome modules
   */
  fontAwesome: {
    // Doc: https://github.com/Qonfucius/nuxt-fontawesome
    packs: [
      {
        package: "@fortawesome/free-solid-svg-icons",
        icons: ["faCalendar", "faClock", "faUser"]
      }
    ]
  },

  /*
   ** Sitemaps modules
   */
  sitemap: {
    // Doc: https://github.com/nuxt-community/sitemap-module
    hostname: "https://protezionecivile-settimomilanese.it/",
    gzip: true,
    routes: [
      {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/activity",
        changefreq: "monthly",
        priority: 0.5,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.3,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/purpose",
        changefreq: "monthly",
        priority: 0.3,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/tools",
        changefreq: "monthly",
        priority: 0.3,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/vehicle",
        changefreq: "monthly",
        priority: 0.3,
        lastmodISO: "2019-06-10"
      },
      {
        url: "/vehicle/mitsubishi",
        changefreq: "monthly",
        priority: 0.3,
        lastmodISO: "2019-06-10"
      }
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://smprocivapp.firebaseio.com"
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
