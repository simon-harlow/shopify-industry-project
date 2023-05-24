import React  from "react";
import { Flex, Button, Card, Text, Link, Select, } from "@chakra-ui/react";
import {ArrowBackIcon, ChevronDownIcon, CloseIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

 
function AddTask() {


	return (
        <Flex direction="column">
            <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/products/editCourse" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Module 1</Text>
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Jan 1</Text>
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
            <Card
            bg="white"
            rounded="md"
            boxShadow="md"
        >
            <Flex direction="column">
                <Flex padding="1rem" direction="column"display="flex">
                    <Flex justifyContent="space-between" >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            Lesson 1
                        </Text>
                    </Flex>
                    <Flex margin=" 1rem 0" bg="$InputBackground"  flexDirection="column">
                        <Flex justifyContent="space-between">
                            <Text fontSize="1rem" padding="1rem">Fundamentals</Text> 
                            <CloseIcon justifyContent="center" alignSelf="center" marginRight="1rem"/>
                        </Flex>
                        <Text fontSize="0.9rem" padding="1rem">View Content <ChevronDownIcon/></Text>
                    </Flex>    
                    <Flex gap="1rem" justifyContent="flex-end">
                            <Button color="black" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="transparent">
                                Import Task
                            </Button>
                            <Button  color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem" border="1px solid black" padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" >
                                Add Task
                            </Button>   
                    </Flex>
                </Flex>
            </Flex>
        </Card>
        </Flex>
    )
}

export default AddTask;