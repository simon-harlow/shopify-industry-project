import React from 'react'
import { Box, Flex, Image, InputGroup, InputLeftElement, Input, Text, Button, HStack} from '@chakra-ui/react'
import {BellIcon, SearchIcon } from '@chakra-ui/icons'
import logo from '../../assets/logos/shopify_logo.png';


function Header() {
  return (

    //boiler plate reference for how to use fonts

    <Flex bg='white' h={"56px"} alignItems='center' width="100%" padding="0 1rem" justifyContent="space-between">
      
        <Image src={logo} alt='Shopify Logo' bg='white' width='auto' h={12} />
        <InputGroup borderRadius={5} size="sm" width='40%' bg="$InputBackground" >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" borderRadius='5px' focusBorderColor="$ShopifyGreen"/>
      </InputGroup>
      <HStack>
      <BellIcon w="24px" height="29px" color="$IconGrey"/>  
      <Button borderRadius='40px' bg="$Yellow" padding='0px'>XA</Button>
      <Text fontSize="1rem">Xquenda Andreev</Text>
      </HStack>

    </Flex>
  )
}

export default Header