import React from "react";
import { useNavigate } from "react-router-dom"
import { Box, Flex, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import Logo from "../../assets/images/shopify_logo_whitebg.svg"

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => navigate(`/stores`)


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
                justify="space-between"
                h={456}
                w={556}
			>
				<Box
					as="img"
					src={Logo}
					alt="Shopify Logo"
					w="5rem"
					h="3rem"
				/>
                
                <Flex direction="column" align="flex-start" justify="center">
					<Text fontSize="lg" as="b">Choose an account</Text>
					<Text fontSize="xs" color="grey">to continue to Shopify</Text>
                </Flex>

				<Flex direction="column" align="flex-start" justify="center">
					<Flex mb={4} onClick={handleLogin} cursor="pointer" align="center">
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							bg="#FFC96B"
							borderRadius="full"
							width="2.5rem"
							height="2.5rem"
						>
							<Text color="black" fontSize="xl">
							XA
							</Text>
						</Box>
						<Flex direction="column" ml={4}>
							<Text fontSize="md" as="b">Xquenda Andreev</Text>
							<Text fontSize="xs" color="#828899">xquenda.andreev@gmail.com</Text>
						</Flex>
					</Flex>

					<Flex mb={6} align="center">
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						bg="#D9D9D9"
						borderRadius="full"
						width="2.5rem"
						height="2.5rem"
					>
						<AddIcon color="#828899"/>
					</Box>
						<Text ml={4}>Add Account</Text>
					</Flex>
                </Flex>

				<Flex justifyContent="flex-end">
					<Text fontSize="xs" mr={8}>Help</Text>
					<Text fontSize="xs" mr={8}>Privacy</Text>
					<Text fontSize="xs">Terms</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Login;
