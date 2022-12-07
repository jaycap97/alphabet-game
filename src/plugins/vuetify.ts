import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#212121',
          secondary: '#ffffff',
        },
      },
      dark: {
        colors: {
          primary: '#e0e0e0',
          secondary: '#121212',
        },
      },
    },
  },
})
