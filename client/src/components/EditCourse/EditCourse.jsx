import React from "react";
import { Flex, Button, Card, Text, Image, Box, Link, Select } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

import illustration from '../../assets/images/Illustration.jpg'

function EditCourse() {

	return (
        <Flex direction="column">
        <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
            <Flex>
                <Link as={NavLink} to="/listcourses" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                <Flex direction="column" alignSelf="center">
                    <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Courses: Beginner Language</Text>
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
        <Flex justifyContent="center">
        <Box w="760px" bg="white" h="180px" borderRadius="5px" padding="20px">
            <Flex>
                <Flex direction="column" marginRight="20px">
                    <Text fontWeight="500">
                        Let's add a new module to your course, Xquenda!
                    </Text>
                    <Text margin="1rem 0">
                        Click “Add New Module” at the top right to begin. You can then add your lectures, assignments, tests, forms and certificates within each module. 
                    </Text>
                    <Text textAlign="center" color="navy">
                        Learn more about customizing your course
                    </Text>
                </Flex>
                <Image src={illustration}/>
            </Flex>
        </Box>

        </Flex>
        </Flex>
	);
}

export default EditCourse;