import {Box, Button, Flex, Stack, Text, Image} from "@chakra-ui/react"
import I1 from "../assets/1.webp"
import I2 from "../assets/blue.webp"
import I3 from "../assets/yellow.webp"
const App:React.FC = () => {
  
  return (
    <Flex mt={12} position="relative" pt={8} pb={8} justify="center" align="center" direction="column">
        <Text pb={4} variant="PAGE_title">Top Quality Digital <br /> Products To Explore</Text>
        <Text pb={4} maxWidth="70%">Check out our website to find great software products and deals! if you need a website or web application this is the place to go!</Text>
        <Button mb={4}>Explore</Button>
        <Image src={I1} w="80%" />
    </Flex>
  )
}

export default App
