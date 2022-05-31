import { 
  Box, VStack, Avatar, useColorModeValue as mode, Text, 
  Image, HStack, IconButton, Spacer, useBreakpointValue 
} from "@chakra-ui/react";
import { MenuFilters } from "./TrendingList"

import { BiMessageRounded } from 'react-icons/bi'
import { BsUpload } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'

const TwixCard = ({ options, avatar, name, username, description, image, link, link_image, link_title, link_desc, time }) => {
  const breakpointName = useBreakpointValue({ base: name.length > 7 ? `${name.substr(0,7)}...` : name, md: name })
  const breakpointUsername = useBreakpointValue({ base: username.length > 5 ? `${username.substr(0,5)}...` : username, md: username })

  return (
    <HStack spacing={3} align="start" w="full">
      <Avatar size="md" src={avatar} />
      <VStack align="start" spacing={1} w="full">
        <VStack align="start" w="full" spacing={-1}>
          <HStack spacing={2} align="start" w="full">
            <HStack spacing={1}>
              <HStack spacing={1}>
                <Text fontWeight="bold">{breakpointName}</Text>
                <Text color="gray">@{breakpointUsername}</Text>
              </HStack>
              <Text color="gray">&bull; {time}</Text>
            </HStack>
            <Spacer />
            <MenuFilters options={options} icon={<HiDotsHorizontal size={16} />} props={{ px: 3 }} />
          </HStack>
          <Text pb={2}>{description}</Text>
        </VStack>
        {
          image && <Image src={image} borderRadius="xl" w="full" h={{ base: 'auto', md: '300px', '2xl': '600px' }} />
        }
        {
          link && 
          <Box as="a" href={link} target="_blank">
            <Image src={link_image} borderTopRadius="xl" w="full" h={{ base: 'auto', md: '300px', '2xl': '600px' }} />
            <Box bg={mode('gray.50','black.500')} borderBottomRadius="xl" p={3} pb={4}>
              <Text>{link_title}</Text>
              <Text>{link_desc}</Text>
            </Box>  
          </Box>
        }
        <HStack align="start" spacing={{ base: 4, md: 24 }} w="full" pt={1}>
          <IconButton variant="ghost" rounded="full" _hover={{ color: 'primary.500', bg: 'rgba(28, 155, 232, 0.2)' }} _active={{ color: 'primary.500' }} _focus={{ borderColor: 'white' }} icon={<BiMessageRounded />} />
          <IconButton variant="ghost" rounded="full" _hover={{ color: 'green.500', bg: 'rgba(7, 142, 94, 0.2)'  }} _active={{ color: 'green.500' }} _focus={{ borderColor: 'white' }} icon={<AiOutlineRetweet />} />
          <IconButton variant="ghost" rounded="full" _hover={{ color: 'pink.500', bg: 'rgba(249, 25, 127, 0.2)'  }} _active={{ color: 'pink.500' }} _focus={{ borderColor: 'white' }} icon={<AiOutlineHeart />} />
          <IconButton variant="ghost" rounded="full" _hover={{ color: 'primary.500', bg: 'rgba(28, 155, 232, 0.2)' }} _active={{ color: 'primary.500' }} _focus={{ borderColor: 'white' }} icon={<BsUpload />} />
        </HStack>
      </VStack>
    </HStack>
  )
}

const options = [
  "Not interested",
  "Follow @NorthWestAgency",
  "Mute @NorthwestAgency",
  "Block @NorthwestAgency",
  "Embed Twix",
  "Report Twix"
]

export const TweetsList = ({ items=[] }) => (
  <Box pt={4}>
  <VStack align="start" spacing={8} w="full">  
    {
      items.map((twix, twixKey) => <TwixCard key={twixKey} options={options} {...twix} />)
    }
  </VStack>
</Box>
)