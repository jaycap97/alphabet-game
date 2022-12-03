import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          secondary: '#ffffff',
        },
      },
      dark: {
        colors: {
          secondary: '#121212',
        },
      },
    },
  },
})
