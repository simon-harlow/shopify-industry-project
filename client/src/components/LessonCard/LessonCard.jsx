import React, { useState } from "react";
import { Link, Flex, Box, Card, Text, Option, Button, Select, Modal, FormLabel, Input, FormControl, FormHelperText, FormErrorMessage,
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
                            <Button onClick={onOpen} color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem" padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" >
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
            <Text fontSize="16px" color="black" fontWeight="700" mb={6}>Task</Text>
            <FormControl pb="1rem">
                <FormLabel>Content Type</FormLabel>
                <Select placeholder='Select option' focusBorderColor="$ShopifyGreen" width="50%">
                    <option value='option1'>Lecture</option>
                </Select>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Title of Lecture</FormLabel>
                <Input type="text" placeholder="Fundamentals" focusBorderColor="$ShopifyGreen"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Description</FormLabel>
                <Input type="text" placeholder="Write brief overview of the lecture..." focusBorderColor="$ShopifyGreen"/>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Duration</FormLabel>
                <Input type="text" placeholder="hh:mm" focusBorderColor="$ShopifyGreen"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Lecture Media</FormLabel>
                <Flex w="100%" h="61px" bg="#F2F7FE" borderRadius="5px" border="2px dashed #2C6ECB" mb={3} justify="center" align="center" color="#2C6ECB">Drop files to upload</Flex>
                <Textarea type="text" placeholder="or type lecture content here..." focusBorderColor="$ShopifyGreen" resize="none"/>

            </FormControl>
            </form>
        </ModalBody>

        <ModalFooter >
            <Button onClick={onClose} mr="1rem" bg="white" color="black" border="1px solid #BABFC3">
                Cancel
            </Button>
            <Link as={NavLink} to="/products/editCourse/addTask">
                <Button form="new-note" bg="$ShopifyGreen" color="white" _hover={{ bg: "", boxShadow: "lg" }}>
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