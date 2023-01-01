import {Box, Flex, Stack, Text, Image, Container} from "@chakra-ui/react"


import Nav from './components/Nav'
import Footer from "./components/Footer"

import Land from "./pages/Land"
import FourCards from "./pages/FourCards"
import TwoBigCards from "./pages/TwoBigCards"
import Red from './pages/Red'
import Plans from './pages/Plans'
import Team from "./pages/Team"
import Reviews from "./pages/Reviews"

import I2 from "./assets/blue.webp"
import I3 from "./assets/yellow.webp"

const App:React.FC = () => {
  
  return (
    <Box fontFamily="Poppins">
      <Nav /> {/*pading: 1em 3em*/}

      <Image position="absolute" left="0px" top={{base:"4%", lg:"5%" }}src={I2} w={{base:150, md:300, lg:500}} />
      <Image position="absolute" right="0px" top={{base:"4%", lg:"5%" }} src={I3}  w={{base:150, md:200, lg:500}} />
      <Container maxWidth="1200px">
        <Land />
      </Container>
      
      <FourCards /> {/*m={3em}*/}
      <TwoBigCards />
      <Red />
      <Plans />
      <Team />
      <Reviews />
      <Footer />
    </Box>
  )
}

export default App
