import React from "react";
import { Flex } from "@chakra-ui/react";
import ModuleCard from "../ModuleCard/ModuleCard";

const ModuleList = ({list }) =>{

    if(list == null) return<div>Loading list...</div>;

    return(

            <Flex gap="1rem" >
                {list.map((ex) =>(
                        <ModuleCard
                            key={ex.name}
                            name={ex.name}
                            start={ex.start}
                            
                        />
                ))}
            </Flex>

    );
}


export default ModuleList;


