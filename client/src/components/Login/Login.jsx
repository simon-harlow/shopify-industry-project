import React from "react";
import { useNavigate } from "react-router-dom"
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import Logo from "../../assets/images/shopify_logo_whitebg.svg"

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => navigate(`/products`)


	return (
		<Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            zIndex={9999}
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
		>
			<Flex
				direction="column"
				bg="white"
				p={6}
				rounded="md"
				boxShadow="md"
			>
				<Box
					as="img"
					src={Logo}
					alt="Shopify Logo"
					mb={6}
					w="4rem"
					h="2rem"
				/>

				<Input type="text" placeholder="Username" mb={4} />

				<Input type="password" placeholder="Password" mb={4} />

				<Button colorScheme="blue" mb={4} onClick={handleLogin}>
					Login
				</Button>

				<Flex justifyContent="flex-end">
					<Text mr={2}>Help</Text>
					<Text mr={2}>Privacy</Text>
					<Text>Terms</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Login;
