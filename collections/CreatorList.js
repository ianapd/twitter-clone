import Link from 'next/link'
import {
  Heading, Box, Button, HStack, Text,
  useColorModeValue as mode, Avatar, VStack, Spacer, useBoolean
} from '@chakra-ui/react'
import { HiBadgeCheck } from 'react-icons/hi'

const CreatorCard = ({ name, username, avatar }) => (
  <HStack spacing={3} w="full" _hover={{ bg: mode('gray.50', 'secondary.600') }}>
    <Avatar src={avatar} size="md" />
    <VStack align="start" spacing={0}>
      <HStack spacing={1}>
        <Text fontWeight="bold" fontSize="sm">{name}</Text>
        <HiBadgeCheck color="#1C9BE8" size={20} />
      </HStack>
      <Text fontSize="sm" color="gray">@{username}</Text>
    </VStack>
    <Spacer />
    <Button variant="primary" size="sm" bg={mode('black', 'white')} color={mode('white', 'black')}>Follow</Button> 
  </HStack>
)

export const CreatorList = ({ users=[] }) => {
  const [loadMore, setLoadMore] = useBoolean()

  return (
    <Box bg={mode('gray.50', 'secondary.500')} w="full" borderRadius="xl" p={3}>
      <Heading size="md" my={3}>Who to follow</Heading>
      <VStack align="start" spacing={4} mt={4} mb={6}>
        {
          (loadMore ? users : users.slice(0,3)).map((user, userKey) => <CreatorCard key={userKey} {...user} />)
        }
      </VStack>
      <Button variant="link" color="primary.500" onClick={() => setLoadMore.toggle()} _focus={{ borderColor: 'white' }} pb={3}>{loadMore ? 'Show less' : 'Show more'}</Button>
    </Box>
  )
}