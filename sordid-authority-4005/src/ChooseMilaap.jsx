import logo from './logo.svg';
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

const ChooseMilaap = () => {
  return (
    <Box p='4' bg="green.100">
        <Box fontSize="30px" fontFamily={"AvenirLTPro-Medium"} fontWeight="400">

        <h3  >Why choose Milaap?</h3>
        </Box>
    <Flex  w="80%" marginLeft="200px" justifyContent="space-around">
        <Box w="40%" maxH="800px">
            <Box  h="150px" border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="5px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
            <br />
            {/* //className="App-logo" */}
            <Box marginLeft="-220px"marginTop="25%"  marginBottom={"-5"}> <Image w="59%" h="300px" src={logo}  alt="logo" />
            </Box>
           
        </Box>
        <Spacer />
        <Box width="25%"  borderColor="#e0e1e3">
        <Box h="150px" border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="10px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
            <br />
            
            <Box h="150px"  border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="5px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
            <br />
            <Box h="150px"  border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="5px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
        </Box>
        <Spacer />
        <Box width="25%"  borderColor="#e0e1e3">
        <Box h="150px" border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="10px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
            <br />
            
            <Box h="150px"  border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="5px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
            <br />
            <Box h="150px"  border="2px dashed" bg="#fff" borderColor="#e0e1e3" borderRadius="5px">
                <Box  borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">ii</Box>
                <Box>ooo</Box>
            </Box>
        </Box>
    </Flex>
    </Box>
  )
}

export default ChooseMilaap