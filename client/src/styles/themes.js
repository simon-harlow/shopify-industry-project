import { extendTheme } from '@chakra-ui/react';

export const themes = extendTheme({
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1280px',
    },
    colors: {
        $LightCoral: '#FA8072',
        $DarkSalmon: '#E9967A',
        $Orange: '#FF7F50',
        $White: '#FFFFFF',
        $Alabaster: '#EDEADE',
        $Mercury: '#e5e5e5',

    },

    fontSizes: {

    },
    lineHeights: {

    },                                    //commenting out because this is boilerplate code
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