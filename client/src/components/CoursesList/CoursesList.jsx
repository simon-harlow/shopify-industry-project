import React from "react";
import { Flex, Button, Card, Text, Image, Link, Select } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";
import checked from '../../assets/images/Checkered.png'

function CoursesList() {

	return (
        <Flex direction="column">
            <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/listcourses" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Courses</Text>
                    </Flex>
                </Flex>
                <Flex gap="1rem">
                    <Button textAlign="center" bg="transparent" fontWeight="700">Edit</Button>
                    <Select placeholder='More action' width="200px" fontWeight="700">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Link as={NavLink} to="/newModule">
                        <Button textAlign="center" bg="$ShopifyGreen" color="white">+ Add New Courses</Button>
                    </Link>
                </Flex>
            </Flex>

        <Card
            w={320}
            bg="white"
            rounded="md"
            boxShadow="md"
        >
            <Flex direction="column">
                <Image src={checked} h="158px"  />
                <Flex padding="1rem" direction="column"display="flex">
                    <Flex justifyContent="space-between" >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            Begin Language Course
                        </Text>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            ...
                        </Text>
                        </Flex>
                        <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Flex gap="1rem">
                        <Link as={NavLink} to="/editCourse" color="black" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem" border="1px solid black" padding="0 1rem" borderRadius="5px">
                            Edit
                        </Link>
                        <Link  color="blue" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem">
                            Unpublished
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
        </Flex>
	);
}

export default CoursesList;
