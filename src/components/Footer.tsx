import React from 'react'
import {Box, Button, Flex, Stack, Text, Image} from "@chakra-ui/react"

import Logo from "../assets/logo.svg"

const Footer:React.FC = () => {
  return (
    <Stack p={4} spacing={4} color="white" bg="brand" direction="column" align="center">
        <Image src={Logo} />
        <Stack direction="row" spacing={4}>
            <Text>Home</Text>
            <Text>Features</Text>
            <Text>Pricing</Text>
            <Text>Testimonial</Text>
        </Stack>
        <Text>@2022, StartUpLanding</Text>
    </Stack>
  )
}

export default Footer