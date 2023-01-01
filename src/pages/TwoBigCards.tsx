import { useState } from 'react'

import I1 from "../assets/2.png"
import I2 from "../assets/3.webp"
import I4 from '../assets/bag.svg'
import I3 from '../assets/crown.svg'

import {Box, Flex, Stack, Text, Image, Button} from "@chakra-ui/react"
const App:React.FC = () => {
  
  return (
    <Box m={12}>
        {/* PRIMERA*/}
        <Flex mb={4} direction={{base:"column", lg: 'row' }} align="center">
            <Box flex={1}>
                <Image src={I1} m="0 auto" />
            </Box>
            
            <Box flex={1}>
                <Text mb={4} color="brand">OUR SERVICES</Text>
                <Text mb={12} variant="PAGE_title">Business Goals Acheived With Design</Text>
                <Stack direction="row" fontSize="lg" >
                    <Image src={I3} />
                    <Box pt={2}>
                        <Text fontSize={{base:"sm", lg:"md"}}  fontWeight="bold" >Smart Features</Text>
                        <Text fontSize={{base:"sm", lg:"md"}} >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
                    </Box>
                </Stack>
                <Stack direction="row" fontSize="lg" >
                    <Image src={I4} />
                    <Box pt={2}>
                        <Text fontSize={{base:"sm", lg:"md"}}  fontWeight="bold" >Secure Contents</Text>
                        <Text fontSize={{base:"sm", lg:"md"}} >Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
                    </Box>
                </Stack>
            </Box>
        </Flex>

        {/*SEGUNDA*/}
        <Flex align="center" justify="center" direction={{base:"column", lg: 'row-reverse' }}>
            <Box flex={1}>
                <Image src={I2} m="0 auto" />
            </Box>
            
            <Box flex={1}>
                <Text fontSize={{base:"sm", md:"md", lg:"md"}} mb={4} color="brand">CORE FEATURES</Text>
                <Text mb={12} variant="PAGE_title">Smart jackpots that you may love this anytime & anywhere</Text>
                <Stack direction="row" fontSize="lg" >
                    <Image src={I3} />
                    <Box pt={2}>
                        <Text fontSize={{base:"sm", md:"md", lg:"md"}} fontWeight="bold" >Smart Features</Text>
                        <Text fontSize={{base:"sm", md:"md", lg:"md"}}>Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
                    </Box>
                </Stack>
                <Stack direction="row" fontSize="lg" >
                    <Image src={I4} />
                    <Box pt={2}>
                        <Text fontSize={{base:"sm", md:"md", lg:"md"}} fontWeight="bold" >Secure Contents</Text>
                        <Text fontSize={{base:"sm", md:"md", lg:"md"}}>Get Your Blood Tests Delivered At Home, Collect A Sample From Your Blood Tests.</Text>
                    </Box>
                </Stack>
                <Button m="0 42%" >Get Started</Button>
            </Box>
        </Flex>
    </Box>
  )
}

export default App
