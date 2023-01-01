import React, {useState} from 'react'
import {Flex, Stack, Text, Image, Button} from "@chakra-ui/react"
import PlanCard from '../components/PlanCard'

const Plans:React.FC = () => {
const [activeBTN, setActiveBTN] = useState("izq")

  return (
    <Flex p={12} direction="column" justify="center" align="center">
        <Text pb={2} fontWeight={600} color="brand">PRICING PLAN</Text>
        <Text fontWeight={500} fontSize="2xl">Choose Your Pricing Plan</Text>
        <Stack pt={6} pb={10} direction="row" spacing={-1}>
            <Button bg= {(activeBTN == "izq") ? "brand": "gray.200" } onClick={()=> setActiveBTN("izq")} borderRadius={5} >Monthly Plan</Button>
            <Button bg= {(activeBTN == "der") ? "brand": "gray.200" } onClick={()=> setActiveBTN("der")} borderRadius={5} >Annual plan</Button>
        </Stack>
        <Stack w="90%"direction={{base:"column", lg: 'row' }} spacing={8}>
            <PlanCard title="Free plan" sub="For Small Teams Or Office" price={0} />
            <PlanCard trial="or start 14 days trial" title="Bussiness king" sub="For Enterprise Business" price={(activeBTN == "izq") ? 15: 7} />
            <PlanCard trial="or start 14 days trial" title="Pro Master" sub="For Pro Level Developers" price={(activeBTN == "izq") ? 24: 10} />
        </Stack>
    </Flex>
  )
}

export default Plans