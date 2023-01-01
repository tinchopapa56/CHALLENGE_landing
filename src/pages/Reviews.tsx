import {Box, Button, Flex, Stack, Text, Image} from "@chakra-ui/react"
import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react'
import I1 from "../assets/5.webp"
import I2 from "../assets/6.webp"
import I3 from "../assets/7.webp"
import I4 from "../assets/8.webp"
import I5 from "../assets/9.webp"
import I6 from "../assets/10.webp"
import ReviewCard from "../components/ReviewCard"

const Red:React.FC = () => {
  
  return (
    <Box pt={12} pb={12} m={12}>
        <Text pb={2} textAlign="center"  fontWeight={500} color="brand">REVIEWS</Text>
        <Text mb={8} textAlign="center" fontWeight={600} fontSize="2xl">Meet Client Satisfaction</Text>

        <Stack direction={{base:"column", lg: 'row' }} spacing={12} >
            <ReviewCard stars={[1, 2, 3, 4]} title="Design Quality" IMG={I1} author="Anna webber" authorTW="@Awebber"
                description="Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer"
            />
            <ReviewCard stars={[1, 2, 3, 4, 5]} title="Design Quality" IMG={I3} author="Anna webber" authorTW="@Awebber"
                description="Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer"
            />
            <ReviewCard stars={[1, 2, 3, 4, 5]} title="Modern look and trending design" IMG={I2} author="Anna webber" authorTW="@Awebber"
                description="Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer"
            />
            <ReviewCard stars={[1, 2, 3]} title="Layout and Organized items" IMG={I4} author="Anna webber" authorTW="@Awebber"
                description="Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer"
            />
        </Stack>
    </Box>
  )
}

export default Red