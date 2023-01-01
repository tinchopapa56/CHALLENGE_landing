import React from 'react'
import {Box, Icon, Flex, Stack, Text, Image, Button} from "@chakra-ui/react"
import tick from "../assets/tick.svg"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"

interface Props {
    stars: number[],
    title: string,
    description: string,
    IMG: string,
    author: string,
    authorTW: string,
}

const ReviewCard:React.FC<Props> = ({stars, title, description, IMG, author, authorTW}) => {
  return (
    <Stack spacing={3} p={4} direction="column" color="black"
    _hover={{
        boxShadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
        
      }}>
        <Stack fontWeight={600} fontSize="lg" color="brand" spacing={0} direction="row">
        {stars.map( (star, i) => (
            <Icon key={i} as={AiFillStar} />
        ))}
        </Stack>
        
        <Text fontSize="xl" fontWeight={500}>{title}</Text>
        <Text fontSize="md">{description}</Text>
        <Stack direction="row" align="center">
            <Image w={50} border="1px solid red" borderRadius={9999} src={IMG}/>
            <Box>
                <Text fontWeight={500} fontSize="lg">{author}</Text>
                <Text fontWeight={400} color="brand">{authorTW}</Text>
            </Box>
        </Stack>
    </Stack>
  )
}
export default ReviewCard