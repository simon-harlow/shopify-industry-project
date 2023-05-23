import React from "react";
import { Flex, Button, Card, Text, Image, Box, Link, Select } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

import illustration from '../../assets/images/Illustration.jpg'

function NewModule() {

	return (
        <Flex direction="column">
        <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
            <Flex>
                <Link as={NavLink} to="/listcourses" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                <Flex direction="column" alignSelf="center">
                    <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Courses: Beginner Language Course</Text>
                </Flex>
            </Flex>
            <Flex gap="1rem">
                <Button textAlign="center" bg="transparent" fontWeight="700">Edit</Button>
                <Select placeholder='More action' width="200px" fontWeight="700">
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Button textAlign="center" bg="$ShopifyGreen" color="white">+ Add New Courses</Button>
            </Flex>
        </Flex>
        </Flex>
    )
    };

export default NewModule;