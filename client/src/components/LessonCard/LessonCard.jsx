import React, { useState } from "react";
import { Link, Flex, Card, Text, Option, Button, Select, Modal, FormLabel, Input, FormControl, FormHelperText, FormErrorMessage,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, ModalOverlay, useDisclosure, Textarea  } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';

///adding task

const LessonCard = ({lessonName})=>{
    const { name, start } = useParams();
    const [tasks, settasks] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
        <Card
            bg="white"
            rounded="md"
            boxShadow="md"
        >
            <Flex direction="column">
                <Flex padding="1rem" direction="column"display="flex">
                    <Flex justifyContent="space-between" >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            {lessonName}
                        </Text>
                    </Flex>
                        <Flex gap="1rem" justifyContent="flex-end">
                            <Button color="black" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="transparent">
                                Import Task
                            </Button>
                                                 
                       
                 
                            <Button onClick={onOpen} color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem" border="1px solid black" padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" >
                                Add Task
                            </Button>   
                   
                       
                    </Flex>
                </Flex>
            </Flex>
        </Card>


        <Modal isOpen={isOpen} onClose={onClose}
				isCentered
			>
				<ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
        <ModalHeader>
            <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
            <form
            id="new-note"
            >

            <FormControl pb="1rem">
                <FormLabel>Title of Lecture</FormLabel>
                <Input type="text" placeholder="Fundamentals" focusBorderColor="$ShopifyGreen"/>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Type of Task</FormLabel>
                <Select placeholder='Select option' focusBorderColor="$ShopifyGreen">
                    <option value='option1'>Lecture</option>
                </Select>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Title of Lecture</FormLabel>
                <Input type="text" placeholder="Fundamentals" focusBorderColor="$ShopifyGreen"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Overview</FormLabel>
                <Input type="text" placeholder="Body" focusBorderColor="$ShopifyGreen"/>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Duration</FormLabel>
                <Input type="text" placeholder="hh:mm" focusBorderColor="$ShopifyGreen"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Material Delivery</FormLabel>
                <Textarea type="text" placeholder="Add Description" focusBorderColor="$ShopifyGreen"/>

            </FormControl>
            </form>
        </ModalBody>

        <ModalFooter>
            <Button onClick={onClose} >
                Cancel
            </Button>
            <Link as={NavLink} to="/products/editCourse/addTask"><Button form="new-note" bg="$ShopifyGreen" color="white">
                Create Task
            </Button>
            </Link>
        </ModalFooter>
        </ModalContent>
        </Modal>
        </>
        );
}

export default LessonCard;