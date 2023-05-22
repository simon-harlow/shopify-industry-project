import React from "react";
import { Flex, Button, Card, Text } from "@chakra-ui/react";

function Courses() {

	return (
        <Card
            w={320}
            bg="white"
            p="1rem"
            rounded="md"
            boxShadow="md"
        >
            <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Courses
                </Text>
                <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Button bg="#008060" color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem">
                    Add New Course
                </Button>
            </Flex>
        </Card>
	);
}

export default Courses;
