import { Flex, Text, Menu, Link, MenuButton,  Select, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { AnalyticsShopify, CustomersShopify, DiscountsShopify, EmailShopify, FinancesShopify, FlowShopify, HomeShopify, MarketingShopify, OnlineStoreShopify, OrdersShopify, PointOfSalesShopify, ProductsShopify, SearchShopify, ShopMinorShopify } from '../../assets/modifiedIcon';
import { ChevronRightIcon } from '@chakra-ui/icons';


function SideBar() {
    return (
        <Flex
            position="fixed"
            left={0}
            top={14}
            bottom={0}
            width="240px"
            flexDirection="column"
            bg="$InputBackground"
        >   
            <Select placeholder='Xquenda’s Academy' size="sm"  width="220px" fontSize="13px" alignSelf="center" marginY="1rem" borderColor="black" focusBorderColor="$ShopifyGreen">
            </Select>
            <Flex flexDirection="column" mb="1rem">
                <NavItem icon={HomeShopify} title={"Home"} link={"/home"}/>
                <NavItem icon={OrdersShopify} title={"Orders"} link={"/orders"}/>
                <NavItem icon={ProductsShopify} title={"Products"} link={"/products"} />
                <NavItem icon={CustomersShopify} title={"Customers"} link={"/customers"}/>
                <NavItem icon={FinancesShopify} title={"Finances"} link={"/finances"}/>
                <NavItem icon={AnalyticsShopify} title={"Analytics"} link={"/analytics"} />
                <NavItem icon={MarketingShopify} title={"Marketing"} link={"/marketing"}/>
                <NavItem icon={DiscountsShopify} title={"Discounts"} link={"/discounts"}/>
            </Flex>
            <Flex flexDirection="column" mb="1rem">
                <Link as={NavLink} to={"/saleschannels"} marginX="1rem" flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
                    <Text textColor="$NavHeaderText" fontSize="12px" lineHeight="16px">Sales channels </Text>
                    <ChevronRightIcon />
                </Link>
                <NavItem icon={OnlineStoreShopify} title={"Online Store"} link={"/onlinestore"}/>
                <NavItem icon={PointOfSalesShopify} title={"Point of Sale"} link={"/pointofsales"}/>
                <NavItem icon={ShopMinorShopify} title={"Shop"} link={"/shop"}/>

            </Flex>
            <Flex  flexDirection="column">
                <Link as={NavLink} to={"/apps"} marginX="1rem" flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
                    <Text textColor="$NavHeaderText" fontSize="12px" lineHeight="16px">Apps</Text>
                    <ChevronRightIcon />
                </Link>
                <NavItem icon={EmailShopify} title={"Shopify Email"}  link={"/shopifyemail"}/>
                <NavItem icon={SearchShopify} title={"Shopify Search & Dis..."}  link={"/shopifysearch"}/>
                <NavItem icon={FlowShopify} title={"Shopify Flow"} link={"/shopifyflow"}/>
            </Flex>
        </Flex>
    )
}
export default SideBar;

    function NavItem({icon, title, link}){
    return(
        <Flex
            flexDirection="column"
            width="100%"
            alignItems={"flex-start"}
        >
            <Menu width="100%">
                <Link 
                    width="100%"
                    as={NavLink} to={link} textColor={"$IconGrey"}
                    _activeLink={{
                        textColor:"$ShopifyGreen",
                        backgroundColor:"NavHover"
                        }}
                
                >
                <MenuButton>
                    <Flex alignItems="center">
                        <Icon as={icon}  marginLeft="1rem" marginRight="11px"/>
                        <Text lineHeight="20px" fontWeight="500" fontSize="14px" >{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

