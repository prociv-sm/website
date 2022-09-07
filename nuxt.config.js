module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ProCiv Settimo M.se',
    title: 'Home' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium%20Web:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' }
    ],
    htmlAttrs: {
      lang: 'it'
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loadingIndicator: {
    name: 'fading-circle',
    color: '#0066cc',
    background: '#ffffff'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/theme.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/vuetify"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }],
    '@nuxtjs/axios',
    '@nuxtjs/color-mode',
    ['nuxt-i18n', {
      detectBrowserLanguage: false,
      locales: [{
        code: 'en',
        flag: 'us',
        name: 'English',
        file: 'en.js'
      }, {
        code: 'it',
        flag: 'it',
        name: 'Italiano',
        file: 'it.js'
      }],
      lazy: true,
      langDir: 'i18n/',
      defaultLocale: 'it'
    }],
    '@nuxtjs/sitemap'
  ],

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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
};
