require('dotenv').config()
module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ProCiv Settimo M.se',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/index.png' },
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
  plugins: [
    { src: "~/plugins/vuetify" },
    { src: '~/plugins/notifier.js' },
    { src: '~/plugins/calendar.js', ssr: false },
    // Filters
    { src: '~/filters/formatDate.js' }
  ],

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
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
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
    '@nuxtjs/sitemap',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],

  /*
   ** Sitemaps modules
   */
  sitemap: {
    // Doc: https://github.com/nuxt-community/sitemap-module
    hostname: "https://procivsettimomi.it/",
    gzip: true,
    exclude: [
      'operations/**',
      'en/operations/**'
    ],
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1.0
      },
      {
        url: "/en",
        changefreq: "daily",
        priority: 1.0
      },
      {
        url: "/about",
        changefreq: "monthly",
        priority: 0.5
      },
      {
        url: "/operations",
        changefreq: "daily",
        priority: 1.0
      },
      {
        url: "en/operations",
        changefreq: "daily",
        priority: 1.0
      },
      {
        url: "/headquarter",
        changefreq: "monthly",
        priority: 0.5
      },
      {
        url: "/volunteer",
        changefreq: "monthly",
        priority: 0.5
      },
      {
        url: "/vehicles",
        changefreq: "monthly",
        priority: 0.5
      }
    ]
  },

  /**
   * PWA module configuration
   * See https://pwa.nuxtjs.org
   */
  pwa: {
    icon: {
      source: 'static/index.png',
      filename: 'index.png'
    }
  },

  /**
   * auth modules conf
   * See https://dev.auth.nuxtjs.org/api/auth/
   */
  auth: {
    baseUrl: process.env.API_BASE_URL || 'https://api.procivsettimomi.it',
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/'
    },
    strategies: {
      local: {
        scheme: 'token',
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post' },
          user: false,
          logout: false
        },
        user: {
          property: false,
          autoFetch: false
        },
        token: {
          property: 'access_token',
          global: true,
          type: 'Bearer'
        }
      }
    }
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.procivsettimomi.it',
    BASE_URL: process.env.BASE_URL || 'https://procivsettimomi.it'
  },

  /**
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {
    https: process.env.NODE_ENV === 'production',
    baseURL: process.env.API_BASE_URL || 'https://api.procivsettimomi.it',
    credentials: false,
    headers: {
      'Access-Control-Allow-Origin': 'api.procivsettimomi.it',
      'Content-Type': 'application/json'
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
};
