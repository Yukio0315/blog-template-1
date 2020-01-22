import colors from 'vuetify/es5/util/colors'
import StylelintPlugin from 'stylelint-webpack-plugin'
import ctfConfig from './lib/config'
import { createClient } from './plugins/contentful'

export default {
  mode: 'universal',
  env: {
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_MEMBER_TYPE_ID: process.env.CTF_MEMBER_TYPE_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#29206d' },
  loadingIndicator: {
    name: 'circle',
    color: '#29206d',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.scss', 'vue2-animate/dist/vue2-animate.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/contentful',
    { src: '~/plugins/mq', ssr: true },
    { src: '~/plugins/vue2-google-maps', ssr: true },
    '~/plugins/mixin'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faBars', 'faTimes', 'faChevronRight', 'faChevronDown']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faTwitter', 'faInstagram', 'faLine']
          }
        ]
      }
    ]
  ],
  styleResources: {
    scss: ['assets/scss/mixin.scss', 'assets/scss/variables.scss']
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
      config.performance = config.performance || {}
      config.performance.maxEntrypointSize = 700 * 1024
      config.performance.maxAssetSize = 700 * 1024
      if (isDev && isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
    },
    transpile: [/^vue2-google-maps($|\/)/, /^vue2-gmap-custom-marker($|\/)/],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-responsive-type': true,
        'postcss-hexrgba': true,
        'css-mqpacker': true
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  generate: {
    routes() {
      return createClient(ctfConfig)
        .getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
        })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: `/blog/${entry.fields.slug}`,
              payload: entry.fields
            }
          })
        })
    }
  }
}
