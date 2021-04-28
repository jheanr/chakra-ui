import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    teal: {
      "700": "#47585B",
      "50": "#F5F8FA",
    },
    yellow: {
      "700": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'teal.50',
        color: 'teal.700'
      }
    }
  }
})