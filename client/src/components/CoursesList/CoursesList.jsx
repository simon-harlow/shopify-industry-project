import React, {useRef } from "react";
import { Flex, Button, Card, Text, Image, Link, Select,   Modal, 
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";
import checked from '../../assets/images/Checkered.png'

function CoursesList() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef(null)

	return (
        <>
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
                    <Link as={NavLink} to="/courses/new">
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
                        <Link as={NavLink} to="/editCourse">
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            ...
                        </Text>
                        </Link>
                        </Flex>
                        <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Flex gap="1rem" justifyContent="space-between">
                        
                            <Button color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem" border="1px solid black" padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" onClick={onOpen}>
                                Publish
                            </Button>                            
                       
                        
                            <Button color="black" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="transparent">
                                Draft
                            </Button> 
                       
                    </Flex>
                </Flex>
            </Flex>
        </Card>
        </Flex>

        
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} variant="wide">
            <ModalOverlay />
            <ModalContent>
            <ModalHeader borderBottom="1px solid black">Would you like to publish the following course?</ModalHeader>
            <ModalCloseButton />
            <ModalBody borderBottom="1px solid black"> 
                Beginner Language Courses
                
            </ModalBody>

            <ModalFooter>
                <Button  mr={3} onClick={onClose}>
                No, Go back
                </Button>
                <Button color="white" bg="$ShopifyGreen">Yes, Publish</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
	);
}

export default CoursesList;
