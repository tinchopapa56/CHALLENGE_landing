import {Box, Button, Flex, Stack, Text, Image} from "@chakra-ui/react"
import IB from "../assets/3.png"

const Red:React.FC = () => {
  
  return (
    <Stack backgroundImage={IB} p={12} bg="brand" color="white" justify="center" direction="column">
        <Text textAlign="center" >WHATS THE FUNCTION</Text>
        <Text pb={4} fontSize="2xl" fontWeight="600" textAlign="center" >Meet The Feature Of Our Product</Text>
        <Stack direction={{base:"column", lg: 'row' }} spacing={12}>
            
            <Stack align="flex-start">
                <Text fontSize="xl" fontWeight="bold"  p={4} borderRadius={9999} bg="white" color="black">01</Text>
                <Text fontSize="lg" fontWeight="600" >Set disbursement instructions</Text>
                <Text fontSize="sm" >Get your blood tests delivered at home, collect a sample from the your blood tests.</Text>
            </Stack>
            <Stack align="flex-start">
                <Text fontSize="xl" fontWeight="bold"  p={4} borderRadius={9999} bg="white" color="black">02</Text>
                <Text fontSize="lg" fontWeight="600" >Assembly receives funds from your account</Text>
                <Text fontSize="sm" >Get your blood tests delivered at home, collect a sample from the your blood tests.</Text>
            </Stack>
            <Stack align="flex-start">
                <Text fontSize="xl" fontWeight="bold"  p={4} borderRadius={9999} bg="white" color="black">03</Text>
                <Text fontSize="lg" fontWeight="600">Assembly initiates disbursement</Text>
                <Text fontSize="sm" >Get your blood tests delivered at home, collect a sample from the your blood tests.</Text>
            </Stack>
            <Stack align="flex-start">
                <Text fontSize="xl" fontWeight="bold"  p={4} borderRadius={9999} bg="white" color="black">04</Text>
                <Text fontSize="lg" fontWeight="600">Customer receives fund payments</Text>
                <Text fontSize="sm" >Get your blood tests delivered at home, collect a sample from the your blood tests.</Text>
            </Stack>

        </Stack>
    </Stack>
  )
}

export default Red
