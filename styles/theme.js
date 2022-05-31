import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    primary: {
      '500': '#1C9BE8',
      '600': '#2EB5F4'
    },
    secondary: {
      '500': '#16181C',
      '600': '#212327'
    },
    green: {
      '500': '#078E5E'
    },
    pink: {
      '500': '#F9197F'
    },
    black: {
      '500': '#0A0909'
    }
  },
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist'
  },
  styles: {
    global: {
      outline: '0px !important',
      '-webkit-tap-highlight-color': 'transparent'
    }
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Tabs: {
      baseStyle: {
        button: {
          _focus: {
            boxShadow: 'none',
          },
          _hover: {
            boxShadow: 'none',
          },
          _active: {
            boxShadow: 'none',
          }
        }
      }
    },
    Button: {
      variants: {
        primary: {
          bg: 'primary.600',
          borderRadius: 'full',
          color: 'white'
        }
      }  
    }
  }
})
