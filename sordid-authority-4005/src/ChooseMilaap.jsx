import logo from './logo.svg';
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const ChooseMilaap = () => {
  return (
    <Box>
        <Box fontSize="30px" fontFamily={"AvenirLTPro-Medium"} fontWeight="400">

        <h3  >Why choose Milaap?</h3>
        </Box>
    <Flex>
        <Box>
            <Box bg="#fff">
                <Box></Box>
                <Box></Box>
            </Box>
            <Box> <Image src={logo} className="App-logo" alt="logo" /></Box>
        </Box>
        <Box></Box>
        <Box></Box>
    </Flex>
    </Box>
  )
}

export default ChooseMilaap