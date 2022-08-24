// import React from "react";



// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;
import "../App.css";

import { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { color, Switch } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate()
  let activeStyle = {
    
    backgroundColor:"#9c3353",
    height:"100%",
    width:"object-fit",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"10px",
    fontWeight:"400",
    fontSize:"17px",
    color:"white"
    
    

  };

  let active4 = {
    
    // backgroundColor:"#9c3353",
    height:"100%",
    width: "object-fit",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"10px",
    fontWeight:"500",
    fontSize:"17px",
    

  };

  

  // #9c3353
 
  return (
    <>
      <Box bg={useColorModeValue('#ffffff', '#ffffff')}   px={4} boxShadow='lg' pos="sticky" top={"0px"} zIndex="10000" h = {{sm: '4em', md: '4em',lg: '5em',xl: '5em','2xl': '5em',}} w={"100%"} >
        <Flex  h = {{sm: '4em', md: '4em',lg: '5em',xl: '5em','2xl': '5em',}} w={"100%"} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <Box>  <Image h={10} src='https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png' alt='Dan Abramov' /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              h = {{sm: '4em', md: '4em',lg: '5em',xl: '5em','2xl': '5em',}}
              >
             {/* <Link display={"flex"} alignItems="center" justifyContent={"center"} h = {{sm: '4em', md: '4em',lg: '5em',xl: '5em','2xl': '5em',}} _focus={{bg:"#9c3353"}} _hover={{bg:"#f5f5f5"}}w={"100%"} fontSize='md'fontWeight={500} href="" onClick={()=>navigate("/") }>    Home</Link>
             <Link><Text onClick={()=>navigate("/hello") }  fontSize='md'fontWeight={500} >Donate</Text></Link>
             <Link><Text onClick={()=>navigate("/") }  fontSize='md'fontWeight={500} >Lend</Text></Link>
             <Link><Text onClick={()=>navigate("/") }  fontSize='md'fontWeight={500} >Pricing</Text></Link>
             <Link><Text onClick={()=>navigate("/") }  fontSize='md'fontWeight={500} >Contact us</Text> </Link> */}
              
              <NavLink to="/" 
              style={({ isActive }) =>
              isActive ? activeStyle : active4
            }
           
              >
              Home
              </NavLink>
              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : active4
            } to="/donate">Donate</NavLink>

              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : active4
            } to="/lend">Lend</NavLink>

              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : active4
            } to="/pricing">Pricing</NavLink>

              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : active4
            } to="/contact">Contact us</NavLink>

             
            </HStack>
            <Switch id='email-alerts'  />
          </HStack>

          <Flex alignItems={'center'}  w={"30%"} justifyContent="space-around">
          <Button
  size='md'
  height= {{sm: '1em', md: '1em',lg: '2.5em',xl: '1em','2xl': '2em',}}
  width= {{sm: '1em', md: '1em',lg: '1em',xl: '1em','5xl': '2em',}}
  // border='2px'
  // borderColor='#9c3353'
  borderRadius={"50px"}
  background={"#9c3353"}
  color={"white"}
  variant="solid"
  _hover={{shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
  fontSize= {{sm: '0.6em', md: '1em',lg: '1em',xl: '1.5em','2xl': '2em',}}
  padding={{sm: '1.5em', md: '1em',lg: '1em',xl: '1em','2xl': '0.5em',}}
  // boxSize="border-box"
>
  Start a fundraiser
</Button>
            <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
               
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.5" cy="19.5" r="18.75" fill="white" stroke="#9C3352" stroke-width="1.5"></circle>
<path d="M22.5759 20.4688C21.4107 20.4688 20.8884 21.125 19 21.125C17.0714 21.125 16.5491 20.4688 15.3839 20.4688C12.4107 20.4688 10 22.9707 10 26.0059V27.0312C10 28.1387 10.8438 29 11.9286 29H26.0714C27.1161 29 28 28.1387 28 27.0312V26.0059C28 22.9707 25.5491 20.4688 22.5759 20.4688ZM26.0714 27.0312H11.9286V26.0059C11.9286 24.0371 13.4554 22.4375 15.3839 22.4375C15.9866 22.4375 16.9107 23.0938 19 23.0938C21.0491 23.0938 21.9732 22.4375 22.5759 22.4375C24.5045 22.4375 26.0714 24.0371 26.0714 26.0059V27.0312ZM19 19.8125C22.1741 19.8125 24.7857 17.1875 24.7857 13.9062C24.7857 10.666 22.1741 8 19 8C15.7857 8 13.2143 10.666 13.2143 13.9062C13.2143 17.1875 15.7857 19.8125 19 19.8125ZM19 9.96875C21.0893 9.96875 22.8571 11.7734 22.8571 13.9062C22.8571 16.0801 21.0893 17.8438 19 17.8438C16.8705 17.8438 15.1429 16.0801 15.1429 13.9062C15.1429 11.7734 16.8705 9.96875 19 9.96875Z" fill="#9C3352"></path>
</svg>
              </MenuButton>
              <MenuList display={"flex"} >
                <MenuItem w={"50%"}>Login</MenuItem>
                <MenuDivider />
                <MenuItem w={"50%"}>Register</MenuItem>
              
               
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  );
}