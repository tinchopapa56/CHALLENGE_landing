import { useState } from 'react'
import I1 from '../assets/rayo.svg'
import I2 from '../assets/bag.svg'
import I3 from '../assets/crown.svg'
import I4 from '../assets/msj.svg'

import {Box, Flex, Stack, Text, Image} from "@chakra-ui/react"
const App:React.FC = () => {
  
  return (
    <Box mt={8} pb={4}>
        <Text textAlign="center" color="brand" >WHAT´S THE FUNCTION</Text>
        <Text variant="PAGE_title" >Meet the feature of our product</Text>
        <Stack m={12} align="center" justify="center" spacing={8} direction={{base:"column", lg: 'row' }}>
            {[I1, I2, I3 , I4].map(img => (
                <Flex align="center" direction="column" justify="center" >
                    <Image src={img} />
                    <Text fontWeight="bold" >Fast Performance</Text>
                    <Text textAlign="center" fontSize="sm" >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
                </Flex>
            ))}
            {/* <Box>
                <Image src={I1} />
                <Text fontWeight="bold" >Fast Performance</Text>
                <Text fontSize="sm" >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
            </Box>
            <Box>
                <Image src={I2}/>
                <Text fontWeight="bold" >Partnership Deal</Text>
                <Text fontSize="sm" >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
            </Box>
            <Box>
                <Image src={I3}/>
                <Text fontWeight="bold" >Pro Subscription</Text>
                <Text fontSize="sm" >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
            </Box>
            <Box>
                <Image src={I4}/>
                <Text fontWeight="bold" >Customer Support</Text>
                <Text fontSize="sm" >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
            </Box> */}
        </Stack>
    </Box>
  )
}

export default App
