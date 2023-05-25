import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Flex, Button, Text ,Link, Select, Modal, FormLabel, Input, FormControl,
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
            tasks:{}
        }
        
        if(lessonName.trim()  !== "" ){
            post = {
                lesson,
                name
            }
            axios
            .post(`http://localhost:8080/products/editCourse/addlessons`, post)
            .then(response =>{       
                setLessonList(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
            event.target[0].value = "";
        }
    }
    
    useEffect(()=>{
        axios
          .get(`http://localhost:8080/products/editCourse/${name}/${start}`)
          .then((response) => {
            setLessonList(response.data);
          })
          .catch((err) => {
            console.log('Error fetching lessons:', err);
          });
    },[]);

	return (
        <Flex direction="column">
            <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
                <Flex>
                    <Link as={NavLink} to="/products/editCourse" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                    <Flex direction="column" alignSelf="center">
                        <Text  fontWeight="700" fontSize="20px" lineHeight="24px">{name}</Text>
                        <Link as={NavLink} to="/products/listcourses">
                            <Text  fontWeight="700" fontSize="14px" lineHeight="20px" color="#2C6ECB" >Back to Courses</Text>
                        </Link>
                    </Flex>
                </Flex>
                <Flex gap="1rem">
                    <Button textAlign="center" bg="transparent" fontWeight="700" cursor="default" _hover={{ bg: ""}}>Edit</Button>
                    <Select placeholder='More actions' width="150px" fontWeight="700">
                    </Select>
                    <Button textAlign="center" bg="$ShopifyGreen" color="white" _hover={{ bg: "", boxShadow: "lg" }}>Save</Button>
                </Flex>
            </Flex>
            {lessonList && <LessonList list={lessonList}/>}

            <Flex  width="50%" margin="auto" marginTop="20%" direction="column" >
                <Text textAlign="center" marginBottom="20px">Get started on building your course by adding lessons!</Text>
                <Flex width="100%" justifyContent="space-around">
                <Button bg="$ShopifyGreen" color="white" onClick={onOpen}>Add Lesson</Button>
                <Text>Or</Text>
                <Button>Import Lesson</Button>
                </Flex>
            </Flex>

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
                    onSubmit={handleUploadForm}
                    >
                    <FormControl>
                        <FormLabel>Title of Lesson</FormLabel>
                        <Input type="text" placeholder="Lesson 1" marginBottom="1rem" focusBorderColor="$ShopifyGreen"/>
                    </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter gap="1rem">
                    <Button>Cancel</Button>
                    <Button type="submit" form="new-note" bg="$ShopifyGreen" color="white" onClick={onClose}>
                    Create Lesson
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>


        </Flex>
    )
    };

export default NewLesson;