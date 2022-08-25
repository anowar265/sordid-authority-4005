import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

const PricingTop = () => {
  return (
    <div>
        <Flex backgroundColor="#9c3353;" minHeight="400px" width="100%" justifyContent="start">
  <Box p='4' bg='red.400' minWidth="50%">
    Box 1
  </Box>
  <Spacer />
  <Box p='4'  minWidth="50%" fontSize="30px" color="#fff" fontFamily="AvenirLtPro-Mediaum">
    <h2>FREE FUNDRAISING FOR ALL!</h2>
    <h3>
    <Box boxSize='100px'>
  <Image src='https://assets.milaap.org/assets/pricing/zero-percent-0f51fe2fc8b6c470bf9419fbe514c51c38d59ce1f447a40c5f3723d28d5e6901.png' alt='zero' />
  <span>PLATFROM FEES</span>
</Box>
       
    </h3>
   
  </Box>
</Flex>
    </div>
  )
}

export default PricingTop