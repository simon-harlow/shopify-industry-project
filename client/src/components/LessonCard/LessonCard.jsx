import React from "react";
import { Flex, Card, Text, Link, Button, Image, Modal, FormLabel, Input, FormControl, FormHelperText, FormErrorMessage,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, ModalOverlay, useDisclosure, Textarea  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import axios from 'axios';


const LessonCard = ({lessonName})=>{

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleUploadForm(event){
        event.preventDefault();
        let post = {};
        const lessonTitle = event.target[0].value;
        const lectureTitle = event.target[0].value;
        const overview = event.target[0].value;
        const duration = event.target[0].value;
        const materialDeliver = event.target[0].value;
        let task ={
            lessonTitle,
            lectureTitle,
            overview,
            duration,
            materialDeliver
        }

        if(lessonTitle.trim()  !== "" ){
            post = {
                task,
                lessonName,
            }
            axios
            .post(`http://localhost:8080/editCourse/`, post)
            .then(response =>{       

                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
            event.target[0].value = "";
            alert(" has successfully been uploaded");
        }
    }
    


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


        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>
            <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
            <form
            id="new-note"
            onSubmit={handleUploadForm}
            >
            <FormControl pb="1rem">
                <FormLabel>Title of Task</FormLabel>
                <Input type="text" placeholder="Add Start Date" />
            </FormControl>
            <FormControl>
                <FormLabel>Title of Lecture</FormLabel>
                <Input type="text" placeholder="Fundamentals"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Overview</FormLabel>
                <Input type="text" placeholder="Body"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Duration</FormLabel>
                <Input type="text" placeholder="hh:mm"/>

            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Material Delivery</FormLabel>
                <Textarea type="text" placeholder="Add Description"/>

            </FormControl>
            </form>
        </ModalBody>

        <ModalFooter>
            <Button onClick={onClose} >
                Cancel
            </Button>
            <Button type="submit" form="new-note" bg="$ShopifyGreen" color="white">
                Create Task
            </Button>
        </ModalFooter>
        </ModalContent>
        </Modal>
        </>
        );
}

export default LessonCard;