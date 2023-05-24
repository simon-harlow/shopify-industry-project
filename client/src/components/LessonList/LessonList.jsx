import React from "react";
import { Flex } from "@chakra-ui/react";
import LessonCard from "../LessonCard/LessonCard";

const LessonList = ({list }) =>{

    if(list == null) return<div>Loading list...</div>;

    return(

            <Flex gap="1rem" flexDirection="column">
                {list.map((ex) =>(
                        <LessonCard
                            key={ex.lessonName}
                            lessonName={ex.lessonName}
                        />
                ))}
            </Flex>

    );
}


export default LessonList;