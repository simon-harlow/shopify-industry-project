import React from 'react'
import { useNavigate } from "react-router-dom"
import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Logo from "../../assets/images/shopify_logo_whitebg.svg"

function Stores() {
    
    const navigate = useNavigate();

    const handleStoreClick = () => navigate(`/home`)


	return (
		<Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            zIndex={9999}
            bg="#008060"
            display="flex"
            justifyContent="center"
            alignItems="center"
		>
			<Flex
				direction="column"
				bg="white"
				p="2rem"
				rounded="md"
				boxShadow="md"
                justify="flex-start"
                gap="3rem"
                h={927}
                w={556}
			>
                <Flex justify="space-between" align="center">
                    <Box
                        as="img"
                        src={Logo}
                        alt="Shopify Logo"
                        w="5rem"
                        h="3rem"
                    />
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bg="#FFC96B"
                        borderRadius="full"
                        width="1.5rem"
                        height="1.5rem"
                        ml="auto"
                    >
                        <Text color="black" fontSize="xs">
                        XA
                        </Text>
                    </Box>
                    <ChevronDownIcon/>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text as="b" fontSize={30}>
                        Stores
                    </Text>
                    <Button bg="#008060" color="white" cursor="default" _hover={{bg: ""}} boxShadow="md">
                        Create another store
                    </Button>
                </Flex>
                <Card 
                    py="1rem"
                    px="2rem"
                    onClick={handleStoreClick}
                    cursor="pointer"
                    boxShadow="md"
                    _hover={{ boxShadow: "xl" }}
                    >
                    <Flex align="center">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="#D9D9D9"
                            borderRadius="full"
                            width="2.5rem"
                            height="2.5rem"
                        >
                        </Box>
                        <Flex direction="column" ml={4}>
                                <Text fontSize="md" as="b">My Store</Text>
                                <Text fontSize="xs" color="#828899">32.33b-3.myshopify.com</Text>
                        </Flex>
                        <ChevronRightIcon ml="auto" boxSize={6}/>
                    </Flex>
                </Card>
			</Flex>
		</Box>
	);
}

export default Stores