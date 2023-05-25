import React from "react";
import { Flex, Card, Text, Link, Button, Image} from "@chakra-ui/react";
import illustration from '../../assets/images/Checkered.png'
import { NavLink } from "react-router-dom";
import { EditPencil } from "../../assets/modifiedIcon";


const ModuleCard = ({name, start})=>{

    let trimmedname = name;
    let trimmedstart = start;
    let combinedLink = trimmedname+ "/" + trimmedstart;

    return (
        <Card
            w={200}
            bg="white"
            rounded="md"
            boxShadow="md"
        >
            <Flex direction="column">
                <Image src={illustration} h="100px"  />
                <Flex padding="1rem" direction="column"display="flex">
                    <Flex justifyContent="space-between" >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            {name}
                        </Text>
                        <Link as={NavLink} to={combinedLink}>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            <EditPencil/>
                        </Text>
                        </Link>
                        </Flex>
                        <Text mb={4}>{start}</Text>
                        <Flex gap="1rem" justifyContent="space-between" align="center">
                        
                            <Button color="white" _hover={{bg: ""}} boxShadow="md" w="fit-content" h="2rem"  padding="0 1rem" borderRadius="5px" bg="$ShopifyGreen" >
                                Publish
                            </Button>                            
                            <Text color="gray" mr={4}>
                                Draft
                            </Text> 
                    </Flex>
                </Flex>
            </Flex>
        </Card>
        );
}

export default ModuleCard;