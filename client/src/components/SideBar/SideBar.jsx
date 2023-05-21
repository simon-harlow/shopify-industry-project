import { AddIcon } from '@chakra-ui/icons';
import { Flex, Text, Menu, Link, MenuButton, Icon} from '@chakra-ui/react';
import React from 'react';

function SideBar() {
    return (
        <Flex
            pos='sticky'
            left='5'
            h='95vh'
            marginTop="15px"
            width="200px"
            flexDirection="column"
            bg="red"
        >
            <Flex flexDirection="column">
                <NavItem icon={AddIcon} title={"Home"}/>
                <NavItem icon={AddIcon} title={"Orders"}/>
                <NavItem icon={AddIcon} title={"Products"}/>
                <NavItem icon={AddIcon} title={"Customers"}/>
                <NavItem icon={AddIcon} title={"Finances"}/>
                <NavItem icon={AddIcon} title={"Analytics"}/>
                <NavItem icon={AddIcon} title={"Marketing"}/>
                <NavItem icon={AddIcon} title={"Discounts"}/>
            </Flex>
            <Flex  flexDirection="column">
                <Text>Sales Channels</Text>
                <NavItem icon={AddIcon} title={"Online Store"}/>
                <NavItem icon={AddIcon} title={"Point of Sale"}/>
                <NavItem icon={AddIcon} title={"Shop"}/>

            </Flex>
            <Flex  flexDirection="column">
                <Text>Apps</Text>
                <NavItem icon={AddIcon} title={"Online Store"}/>
                <NavItem icon={AddIcon} title={"Point of Sale"}/>
                <NavItem icon={AddIcon} title={"Shop"}/>
            </Flex>
        </Flex>
    )
}
export default SideBar;

function NavItem({icon, title}){
    return(
        <Flex
            flexDirection="column"
            width="100%"
            alignItems={"flex-start"}
        >
            <Menu>
                <Link>
                <MenuButton>
                    <Flex>
                        <Icon as={icon}/>
                        <Text>{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
        </Flex>

    )
}