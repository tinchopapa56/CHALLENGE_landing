import {Box, Button, Flex, Stack, Text, Image} from "@chakra-ui/react"
import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react'
import I1 from "../assets/5.webp"
import I2 from "../assets/6.webp"
import I3 from "../assets/7.webp"
import I4 from "../assets/8.webp"
import I5 from "../assets/9.webp"
import I6 from "../assets/10.webp"
import TeamCard from "../components/TeamCard"

const Red:React.FC = () => {
  
  return (
    <Flex m={12} direction="column">
        <Text textAlign="center" pb={2} fontWeight={500} color="brand">Our team</Text>
        <Text textAlign="center" fontWeight={500} fontSize="2xl">The founders of this project</Text>

      {/* <SimpleGrid columns={{sm: 2, md: 3}} spacing='20px'> */}
      <Grid templateColumns={{base:"(repeat1, 1fr)" ,md:"repeat(2,1fr)" , lg:'repeat(3, 1fr)'}} gap={6}>
      {/* direction={{base:"column", lg: 'row' }} */}
        <GridItem w='100%' borderRadius={10} >
         <TeamCard img={I6} name="Kevin Durant" description="Founding CEO" />
        </GridItem>
        <GridItem w='100%' borderRadius={10} boxShadow="sm" >
         <TeamCard img={I2} name="Saimon Harmer" description="CEO" />
        </GridItem>
        <GridItem w='100%' borderRadius={10}  >
         <TeamCard img={I4} name="Saimon Harmer" description="CTO" />
        </GridItem>
        <GridItem w='100%' borderRadius={10} >
         <TeamCard img={I3} name="Igein Fevort" description="Web developer" />
        </GridItem>
        <GridItem w='100%' borderRadius={10}  >
         <TeamCard img={I5} name="Keila Smith" description="Web designer" />
        </GridItem>
        <GridItem w='100%' borderRadius={10}  >
         <TeamCard img={I1} name="Kevin Durant" description="Project Manager" />
        </GridItem>
        {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
      </Grid>
    </Flex>
  )
}

export default Red
