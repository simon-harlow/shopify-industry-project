import React from "react";
import { useNavigate, NavLink } from "react-router-dom"
import { Box, Flex, FormControl, FormLabel, Select, Button, Text, Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'


function CourseForm() {

    const navigate = useNavigate();
    const handleCreateCourseClick = () => navigate(`/listcourses`)

	return (
        <>
            <Flex justifyContent="space-between" align="baseline" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/products" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon /> </Link> 
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
            <Flex justify="center" align="center" mt={20}>
                <Flex
                    direction="column"
                    justify="space-between"
                    py="1rem"
                    w="620px"
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="md"
                    bg="white"
                >
                    <Flex direction="column" justify="center" px="2rem" pb="1rem" borderBottom="1px solid #AEB4B9">
                        <Text fontSize="xl" fontWeight="bold">
                            Name of Course
                        </Text>
                        <Text mt={2}>
                            Beginner Language Course
                        </Text>
                    </Flex>

                    <Box px="2rem" py="1rem" borderBottom="1px solid #AEB4B9">
                        <FormControl>
                            <FormLabel>Type Of Course</FormLabel>
                            <Select w="50%" focusBorderColor="#008060">
                                <option>Language</option>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box px="2rem" py="1rem" borderBottom="1px solid #AEB4B9">
                        <FormControl>
                            <FormLabel>Start Date</FormLabel>
                            <Text>{new Date().toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})}</Text>
                        </FormControl>
                    </Box>

                    <Box px="2rem" py="1rem" borderBottom="1px solid #AEB4B9">
                        <FormControl>
                            <FormLabel>Type of Access</FormLabel>
                            <Select w="50%" focusBorderColor="#008060">
                                <option>Paid</option>
                            </Select>
                        </FormControl>
                    </Box>

                    <Flex justifyContent="flex-end" px="2rem" pt="1rem">
                        <Button variant="outline" mr={2} cursor="default" _hover={{bg: ""}}>
                            Back
                        </Button>
                        <Button bg="#008060" color="white" _hover={{bg: "", boxShadow: "lg"}} boxShadow="md" onClick={handleCreateCourseClick}>
                            Create Course
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
	);
}

export default CourseForm;
