import { Flex, Text, Menu, Link, MenuButton, Icon, Select, Button} from '@chakra-ui/react';
import React from 'react';
import { Home_icon } from '../../assets/modifiedIcon';
import { ChevronRightIcon } from '@chakra-ui/icons';

function SideBar() {
    return (
        <Flex
            position="fixed"
            left={0}
            top={12}
            bottom={0}
            width="240px"
            flexDirection="column"
            bg="$InputBackground"
        >   
            <Select placeholder='Vandelay Industries' size="sm"  width="220px" fontSize="13px" alignSelf="center" marginY="1rem" borderColor="black">
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Flex flexDirection="column">
                <NavItem icon={Home_icon} title={"Home"}/>
                <NavItem icon={Home_icon} title={"Orders"}/>
                <NavItem icon={Home_icon} title={"Products"}/>
                <NavItem icon={Home_icon} title={"Customers"}/>
                <NavItem icon={Home_icon} title={"Finances"}/>
                <NavItem icon={Home_icon} title={"Analytics"}/>
                <NavItem icon={Home_icon} title={"Marketing"}/>
                <NavItem icon={Home_icon} title={"Discounts"}/>
            </Flex>
            <Flex  flexDirection="column">
                <Link href='' marginX="1rem" flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
                    <Text>Sales channels </Text>
                    <ChevronRightIcon />
                </Link>
                <NavItem icon={Home_icon} title={"Online Store"}/>
                <NavItem icon={Home_icon} title={"Point of Sale"}/>
                <NavItem icon={Home_icon} title={"Shop"}/>

            </Flex>
            <Flex  flexDirection="column">
                <Link href='' marginX="1rem" flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
                    <Text>Apps</Text>
                    <ChevronRightIcon />
                </Link>
                <NavItem icon={Home_icon} title={"Online Store"}/>
                <NavItem icon={Home_icon} title={"Point of Sale"}/>
                <NavItem icon={Home_icon} title={"Shop"}/>
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
            padding="0.1rem 1rem"
        >
            <Menu>
                <Link>
                <MenuButton>
                    <Flex alignItems="center">
                        <Icon as={icon} marginRight=".25rem"/>
                        <Text>{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

