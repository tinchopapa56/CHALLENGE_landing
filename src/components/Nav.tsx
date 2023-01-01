import React, {useEffect, useState} from 'react'
import {Box, Button, Flex, Stack, Text, Image, Icon} from "@chakra-ui/react"

import {GiHamburgerMenu} from "react-icons/gi"
import Logo from "../assets/logo.svg"

import { useWindowSize } from './resizehook/useSize'


interface Size {
  width: any;
  height: number | undefined;
}

const Nav:React.FC = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [showNAV, setShowNAV] = useState(false);

  const size:Size = useWindowSize();

  useEffect(() =>{
    console.log(size);
      if(size.width >= 1200) {
        setIsPhone(false);
      } else if(size.width < 1200) {
        setIsPhone(true)
      }
    
  },[size])

  return (

    // <Flex top="0px" z-index={9999} bg="white" position="fixed" w="100%" p="1em 3em" boxShadow="lg" justify="space-between" align="center">
      <Flex wrap="wrap" bg="white" p="1em 3em" boxShadow="lg" justify="space-between" align="center">
        <Image src={Logo} />
        {isPhone ? (
          <>
            <Icon onClick={() => setShowNAV(prev => !prev) } as={GiHamburgerMenu} />
            <Stack w="100%" m={4} textAlign="center" display={showNAV ? "flex":"none"} direction="column" spacing={4}>
                  <Text _hover={{color:"brand", cursor:"pointer"}}>Home</Text>
                  <Text _hover={{color:"brand", cursor:"pointer"}}>Features</Text>
                  <Text _hover={{color:"brand", cursor:"pointer"}}>Pricing</Text>
                  <Text _hover={{color:"brand", cursor:"pointer"}}>Testimonial</Text>
            </Stack>
            {/* <Button display={showNAV ? "flex":"none"} variant="outline" bg="white" color="brand" >Get Started</Button> */}
          </>
        ):(
          <>
            <Stack direction="row" spacing={48}>
              <Text _hover={{color:"brand", cursor:"pointer"}}>Home</Text>
              <Text _hover={{color:"brand", cursor:"pointer"}}>Features</Text>
              <Text _hover={{color:"brand", cursor:"pointer"}}>Pricing</Text>
              <Text _hover={{color:"brand", cursor:"pointer"}}>Testimonial</Text>
            </Stack>
            <Button variant="outline" bg="white" color="brand" >Get Started</Button>
          </>
        )}
    </Flex>
  )
}

export default Nav

// return (

//   // <Flex top="0px" z-index={9999} bg="white" position="fixed" w="100%" p="1em 3em" boxShadow="lg" justify="space-between" align="center">
//     <Flex bg="white" p="1em 3em" boxShadow="lg" justify="space-between" align="center">
//       <Image src={Logo} />

//       <Stack direction="row" spacing={48}>
//           <Text>Home</Text>
//           <Text>Features</Text>
//           <Text>Pricing</Text>
//           <Text>Testimonial</Text>
//       </Stack>
      
//       <Button variant="outline" bg="white" color="brand" >Get Started</Button>
//   </Flex>
// )