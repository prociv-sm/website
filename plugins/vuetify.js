import colors from 'vuetify/es5/util/colors'
import it from 'vuetify/es5/locale/it'
import en from 'vuetify/es5/locale/en'

export default {
  icons: {},
  lang: {
    locales: { it, en },
    current: 'it'
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#175db8',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
