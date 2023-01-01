// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// 2. Call `extendTheme` and pass your custom values
export const Theme = extendTheme({
  colors: {
    brand: "#e11d48"
    },

    components: {
        Button: {
          // 1. We can update the base styles
          baseStyle: {
            // fontWeight: 'bold', // Normally, it is "semibold"
            fontWeight: "400",
            color: "white",
            borderRadius: "15px"
          },
          // 3. We can add a new visual variant
          variants: {
            solid: (props: StyleFunctionProps) => ({
              bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
            }),
            sm: {
              bg: "brand",
              fontSize: 'md',
            },
          },
          // 6. We can overwrite defaultProps
          defaultProps: {
            size: 'lg', // default is md
            variant: 'sm', 
            colorScheme: 'brand', // default is gray
          },
        },
        Container: {
          maxWidth: {
            xl: "1400px",
          },
        },
        Text:{
          variants: {
            PAGE_title: {
              fontSize: "2.25rem",
              fontWeight: "600",
              textAlign: "center",
              lineHeight: "1.15em"
            }
          }
        },
      },
  },
)
