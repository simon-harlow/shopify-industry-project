import React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom"
import { Flex, Button, Card, Text, Select } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'

function Courses() {

    const navigate = useNavigate();
    const handleAddCourseClick = () => navigate(`/courses/new`)

	return (
        <>
            <Flex justifyContent="space-between" align="baseline" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/home" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon boxSize={6} mr={3}/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text fontWeight="bold" fontSize="20px" lineHeight="24px">Courses</Text>
                    </Flex>
                </Flex>
                <Flex gap="1rem">
                    <Button textAlign="center" bg="transparent" fontWeight="700" cursor="default" _hover={{bg: ""}}>Edit</Button>
                    <Select placeholder='More action' width="200px" fontWeight="700" focusBorderColor="#008060">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
            </Flex>
            <Card
                w={320}
                bg="white"
                p="1rem"
                rounded="md"
                boxShadow="md"
            >
                <Flex direction="column">
                    <Text fontSize="16px" fontWeight="bold" mb={2}>
                        Course Name
                    </Text>
                    <Text mb={4} fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Button bg="#008060" color="white" _hover={{bg: "", boxShadow: "lg"}} boxShadow="md" w="fit-content" h="2rem" onClick={handleAddCourseClick}>
                        Add New Course
                    </Button>
                </Flex>
            </Card>
        </>
	);
}

export default Courses;
