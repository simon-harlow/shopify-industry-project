import { Box, Flex, HStack, Image, Link, Icon, Text} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import CoursesImg from "../../assets/images/Courses.png";
import DigitalProduct from "../../assets/images/DigitalProduct.png"
import Dropshipping from "../../assets/images/DropShipping.png"
import HandMade from "../../assets/images/HomeMadeandCrafts.png"
import Print from "../../assets/images/PrintOnDemand.png"


const ProductsPage = () => {

    return(
        <Flex h="50vh" display="flex" alignContent="center" justifyContent="center">
            <HStack gap="1rem" >
                <ProductItem img={DigitalProduct}  title={"Digital Product"} link={'/products/digitalproduct'}/>
                <ProductItem img={Dropshipping}  title={"Drop Shipping"} link={'/products/dropshipping'}/>
                <ProductItem img={HandMade}  title={"Handmade and Crafts"} link={'/products/handmadeandcrafts'}/>
                <ProductItem img={Print}  title={"Print On Demand"} link={'/products/printOnDemand'}/>
                <ProductItem img={CoursesImg}  title={"Courses"} link={'/products/courses'}/>
            </HStack>
        </Flex>
    );

}

export default ProductsPage;

function ProductItem({img, title, link}){
    return(
        <Flex
            flexDirection="column"
            alignItems={"flex-start"}
        >
                <Link 
                    as={NavLink} to={link} textColor={"$IconGrey"}
                    _activeLink={{
                        textColor:"$ShopifyGreen",
                        backgroundColor:"NavHover"
                        }}
                >
                    <Flex alignItems="center" flexDir="column">
                        <Image src={img} w="150px" h="152px" marginBottom="1.5rem"/>
                        <Text lineHeight="20px" fontWeight="500" fontSize="14px" border="1px black solid" padding="0.5rem 1rem" borderRadius="5px">{title}</Text>
                    </Flex>
                </Link>
        </Flex>
    )
}