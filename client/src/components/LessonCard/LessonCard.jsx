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

    function handleUploadForm(event){
        event.preventDefault();
        let post = {};
        const lessonTitle = event.target[0].value;
        const lectureTitle = event.target[1].value;
        const overview = event.target[2].value;
        const duration = event.target[3].value;
        const materialDeliver = event.target[4].value;
        let task ={
            lessonTitle,
            lectureTitle,
            overview,
            duration,
            materialDeliver
        }

        if(lessonTitle.trim() && lectureTitle.trim() && overview.trim() &&duration.trim() && materialDeliver.trim() !== "" ){
            post = {
                task,
                lessonName,
            }
            axios
            .post(`http://localhost:8080/editCourse/:name/:start/task`, post)
            .then(response =>{     
                settasks(response.data);
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
                <FormLabel>Title of Lecture</FormLabel>
                <Input type="text" placeholder="Fundamentals"/>
            </FormControl>
            <FormControl pb="1rem">
                <FormLabel>Type of Task</FormLabel>
                <Select placeholder='Select option'>
                    <option value='option1'>Lecture</option>
                </Select>
            </FormControl>
            <FormControl pb="1rem">
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
            <Link as={NavLink} to="/editCourse/addTask"><Button form="new-note" bg="$ShopifyGreen" color="white">
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