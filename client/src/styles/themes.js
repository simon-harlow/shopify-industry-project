import { extendTheme } from '@chakra-ui/react';

export const themes = extendTheme({
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1280px',
    },
    colors: {
        $Grey: '#828899',
        $NavText: '#202223',

        $NavHover: '#EDEEEF',
        $IconGrey: '#5C5F62', //bell and text
        $NavHeaderText: '#6D7175',
        $ShopifyGreen: '#008060',
        $InputBackground: '#E4E5E7',

        $Yellow: '#FFC96B',
    },

    fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
    },

    fontSizes: {

    },
    lineHeights: {

    },  
    components: {
        Modal: {
          baseStyle: (props) => ({
            dialog: {
              maxWidth: ["50%", "50%", "50%"],
              minWidth: "50%",
              bg: "white"
            }
          })
        }
      }                                  //commenting out because this is boilerplate code
    // components: {
    //     Heading: {
    //         baseStyle: {
    //             color: '$InstockBlack',
    //         },
    //     },
    //     Button: {
    //         variants: {
    //             tab: {
    //                 justifyContent: 'start',
    //                 textTransform: 'uppercase',
    //                 color: '$Slate',
    //                 fontWeight: 'bold',
    //                 fontSize: 'h4TableHeader',
    //                 lineHeight: 'h4TableHeader',
    //                 bg: '',
    //                 h: '',
    //                 p: '0',
    //                 _hover: {
    //                     bg: '',
    //                 },
    //                 _active: {
    //                     bg: '',
    //                 },
    //             },
    //         },
    //     },
    //     Modal: modalTheme,
    // },
});