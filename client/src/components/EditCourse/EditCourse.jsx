import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Flex, Button, Text, Image, Box, Link, Select,   Modal,  Input, FormControl, FormHelperText, FormErrorMessage,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, ModalOverlay, useDisclosure  } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";
import ModuleList from "../ModuleList/ModuleList";

import illustration from '../../assets/images/Illustration.jpg'

function EditCourse() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mods, setModule] = useState([]);

    useEffect(()=>{
        axios
          .get('http://localhost:8080/products/editCourse')
          .then((response) => {
            setModule(response.data);
          })
          .catch((err) => {
            console.log('Error fetching expenses:', err);
          });
    },[]);

    function handleUploadForm(event){
        event.preventDefault();
        let post = {};
        const name = event.target[0].value;
        const start = event.target[1].value;

        if(name.trim() && start.trim() !== "" ){
            post = {
                name,
                start
            }
            axios
            .post(`http://localhost:8080/products/editCourse`, post)
            .then(response =>{      
                setModule(response.data); 
            })
            .catch(error =>{
                console.log(error);
            });
            event.target[0].value = "";
            event.target[1].value = "";

        }
    }

	return (
        <Flex direction="column">
        <Flex justifyContent="space-between" borderBottom="1px solid grey" paddingBottom="20px" marginBottom="20px">
            <Flex>
                <Link as={NavLink} to="/products/listcourses" padding="8px" border="1px solid silver" borderRadius="5px" marginRight="1rem"> <ArrowBackIcon/> </Link> 
                <Flex direction="column" alignSelf="center">
                    <Text  fontWeight="700" fontSize="20px" lineHeight="24px">Courses: Beginner Spanish Course</Text>
                </Flex>
            </Flex>
            <Flex gap="1rem">
                <Button textAlign="center" bg="transparent" fontWeight="700">Edit</Button>
                <Select placeholder='More actions' width="150px" fontWeight="700">
                </Select>
                
                <Button textAlign="center" bg="$ShopifyGreen" color="white" onClick={onOpen}>+ Add New Module</Button>
                
            </Flex>
        </Flex>
        <Flex justifyContent={!mods.length ? "center" : "flex-start"}>



{ !mods.length &&
       
                    <Box w="760px" bg="white" h="180px" borderRadius="5px" padding="20px">
                    <Flex>
                        <Flex direction="column" marginRight="20px">
                            <Text fontWeight="500">
                                Let's add a new module to your course, Xquenda!
                            </Text>
                            <Text margin="1rem 0">
                                Click “Add New Module” at the top right to begin. You can then add your lectures, assignments, tests, forms and certificates within each module. 
                            </Text>
                            <Text textAlign="center" color="navy">
                                Learn more about customizing your course
                            </Text>
                        </Flex>
                        <Image src={illustration}/>
                    </Flex>
                </Box>

}  
    <ModuleList
                list={mods}
            />



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
                <Input type="text" placeholder="Module 1" marginBottom="1rem" focusBorderColor="$ShopifyGreen"/>
                <Input type="text" placeholder="Add Start Date" focusBorderColor="$ShopifyGreen"/>

              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" form="new-note" onClick={onClose}>
              Edit Section
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Flex>
	);
}

export default EditCourse;