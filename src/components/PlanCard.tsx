import React from 'react'
import {Box, Flex, Stack, Text, Image, Button} from "@chakra-ui/react"
import tick from "../assets/tick.svg"

interface Props {
    title: string,
    sub: string,
    price: number,
    trial?: string,
}

const PlanCard:React.FC<Props> = ({title, sub, price, trial}) => {
  return (
    <Box w={{base: "100%", lg:"50%"}} p="2em 1em"  borderRadius={10} boxShadow="xl"
    _hover={{
        boxShadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
        transform: "scale(1.04)",
        cursor: "pointer"
    }}>
        <Text pb={2} fontWeight={600}>{title}</Text>
        <Text fontSize="sm">{sub}</Text>
        <Box pt={4}>
            {[1, 2, 3, 4].map(item => (
                <Stack spacing={4} pt={4} key={item} direction="row" align="center">
                    <Box borderRadius={9999} bg="brand">
                        <Image color="white" src={tick} />
                    </Box>
                    <Text fontSize={{base:"xs", md:"md", lg:"md"}} fontWeight={400}>Drag & Drop Builder</Text>
                </Stack>
            ))}
        </Box>
        <Box pt={8} textAlign="center">
            <Text pb={6}>
                <span style={{fontWeight:"600", fontSize:"2rem"}}>${price}</span>
                /Monthly
            </Text>
            <Button p={4} fontSize="sm">Create Account</Button>
            {trial ? (<Text pt={4} fontWeight={600}>{trial}</Text>): ""}
        </Box>
    </Box>
  )
}
export default PlanCard