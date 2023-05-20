import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function Header() {
  return (

    //boiler plate reference for how to use fonts

    <Box bg='$Orange'>
      <Text fontFamily='Montserrat'>Header</Text>
      <Text fontFamily='titilliumweb'>Some header text</Text>                   
    </Box>
  )
}

export default Header