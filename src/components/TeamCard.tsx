import React, {useState} from 'react'
import T from "../assets/twitter.svg"
import F from "../assets/facebook.svg"
import IG from "../assets/IG.svg"
import {Flex, Stack, Text, Image, transition} from "@chakra-ui/react"

interface Props {
    img: string,
    name: string,
    description: string,
}

const PlanCard:React.FC<Props> = ({img, name, description}) => {

  const [showIcons, setShowIcons] = useState(false)

  return (
    <Stack position="relative" p={12} cursor="pointer" transition="0.2s ease-in-out" justify="center" align="center" direction="column"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
    _hover={{
      boxShadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
      
    }}
     >
        <Image border="1px solid red" borderRadius={9999} src={img}/>
        <Text fontSize={18} fontWeight={500}>{name}</Text>
        <Text>{description}</Text>
        
        <Stack position="absolute" bottom="10%" right="5%" display={showIcons ? "flex":" none" }>
            <Image src={T} w={4}  />
            <Image src={F} w={4}  />
            <Image src={IG} w={4}  />
        </Stack>
    </Stack>
  )
}
export default PlanCard