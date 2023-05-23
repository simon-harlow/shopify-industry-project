import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Flex, Button, Card, Text, Image, Box, Link, Select, Modal, FormLabel, Input, FormControl, FormHelperText, FormErrorMessage,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, ModalOverlay, useDisclosure  } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink, useParams} from "react-router-dom";
import LessonList from "../LessonList/LessonList";



function NewLesson() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, start } = useParams();
    const [lessonList, setLessonList] = useState([]);

    function handleUploadForm(event){
        event.preventDefault();
        let post = {};
        const lessonName = event.target[0].value;
        let lesson ={
            lessonName,
            TypeOfTask: "",
            TitleOfLecture: "",
            Duration:"",
            Material:""
        }

        if(lessonName.trim()  !== "" ){
            post = {
                lesson,
                name
            }
            axios
            .post(`http://localhost:8080/editCourse/addlessons`, post)
            .then(response =>{       
                setLessonList(response.data);
                console.log(lessonList);
            })
            .catch(error =>{
                console.log(error);
            });
            event.target[0].value = "";
            alert(" has successfully been uploaded");
        }
    }
    
    useEffect(()=>{
        axios
          .get(`http://localhost:8080/editCourse/${name}/${start}`)
          .then((response) => {
            setLessonList(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log('Error fetching expenses:', err);
          });
    },[]);

	return (
        <Flex direction="column">
            <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/editCourse" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">{name}</Text>
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">{start}</Text>
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
            {lessonList && <LessonList list={lessonList}/>}

            <Flex  width="50%" margin="auto" marginTop="20%" direction="column" >
                <Text textAlign="center" marginBottom="20px">Get started on building your course y adding lessons!</Text>
                <Flex width="100%" justifyContent="space-around">
                <Button bg="$ShopifyGreen" color="white" onClick={onOpen}>Add Lesson</Button>
                <Text>Or</Text>
                <Button>Import Lesson</Button>
                </Flex>
            </Flex>

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
                    <FormControl>
                        <FormLabel>Title of Lesson</FormLabel>
                        <Input type="text" placeholder="Lesson 1" marginBottom="1rem"/>
                    </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter gap="1rem">
                    <Button>Cancel</Button>
                    <Button type="submit" form="new-note" bg="$ShopifyGreen" color="white">
                    Create Lesson
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>


        </Flex>
    )
    };

export default NewLesson;