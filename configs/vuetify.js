import it from 'vuetify/es5/locale/it'
import en from 'vuetify/es5/locale/en'

export default {
  icons: {},
  lang: {
    locales: { it, en },
    current: 'it'
  },
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        background: '#18191a',
        surface: '#242526',
        primary: '#dd3737',
        secondary: '#829099',
        accent: '#82B1FF',
        error: '#ef476f',
        info: '#2196F3',
        success: '#06d6a0',
        warning: '#ffd166',
      },
      light: {
        background: '#a1a1a1',
        secondary:  '#333333',
        primary: '#0066cc',
      }
    }
  }
}
