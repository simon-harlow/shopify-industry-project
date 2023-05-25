import React  from "react";
import {
	Flex,
	Button,
	Card,
	Text,
	Image,
	Link,
	Select,
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import {ArrowBackIcon, ChevronDownIcon, CloseIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

 
function AddTask() {

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
    <>
        <Flex direction="column">
            <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/products/editCourse" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Module 1</Text>
                        <Link as={NavLink} to="/products/listcourses">
                            <Text  fontWeight="700" fontSize="14px" lineHeight="20px" color="#2C6ECB" >Back to Courses</Text>
                        </Link>
                    </Flex>
                </Flex>
                <Flex gap="1rem">
                    <Button textAlign="center" bg="transparent" fontWeight="700">Edit</Button>
                    <Select placeholder='More actions' width="150px" fontWeight="700">
                    </Select>
                    <Button textAlign="center" bg="$ShopifyGreen" color="white" onClick={onOpen}>Save</Button>
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
                            <Button color="black" _hover={{bg: ""}} cursor="default" boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="transparent">
                                Import Task
                            </Button>
                            <Button  color="white" _hover={{ bg: "", boxShadow: "lg" }} boxShadow="md" w="fit-content" h="2rem" padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" >
                                Add Task
                            </Button>   
                    </Flex>
                </Flex>
            </Flex>
        </Card>
        </Flex>

        <Modal
		isOpen={isOpen}
		onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px"/>
        <ModalContent>
        <ModalHeader>Would you like to save your work?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
            <Button color="black" _hover={{bg: ""}} cursor="default" boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="transparent" mr="1rem" onClick={onClose}>
                No
            </Button>
            <Button color="white" _hover={{ bg: "", boxShadow: "lg" }} boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" onClick={onClose}>
                Yes
            </Button>
        </ModalFooter>
        </ModalContent>
        </Modal>
    </>
    )
}

export default AddTask;