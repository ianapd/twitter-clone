import {
  Heading, Box, Button, HStack, Text, useColorModeValue as mode, VStack, Menu, 
  MenuButton, MenuItem, MenuList, Spacer, useBoolean,
} from '@chakra-ui/react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const options = [
  "Not Interested in this",
  "This Trend is harmful or spammy"
]

export const MenuFilters = ({ options = [], label, icon, props }) => (
  <Menu placement="bottom-end" autoSelect={false} closeOnSelect={true}>
    <MenuButton as={Button} boxSize="30px" variant="ghost" borderRadius="full" _focus={{ borderColor: 'white' }} _hover={{ bg: 'rgba(28, 155, 232, 0.2)', color: '#1C9BE8' }} {...props}>
      {icon}
    </MenuButton>
    <MenuList bg={mode('gray.50', 'black.500')} borderRadius="lg" border={0}>
      {
        options.map((option, optionKey) => <MenuItem _hover={{ bg: 'rgba(28, 155, 232, 0.1)', color: '#1C9BE8' }} key={optionKey}>{option}</MenuItem>)
      }
    </MenuList>
  </Menu>
)

const TrendingCard = ({ options, category, name, total, number }) => (
  <HStack w="full" align="center" _hover={{ bg: mode('gray.50', 'secondary.600') }}>
    <VStack align="start" spacing={0}>
      <HStack color="gray" fontSize="xs" spacing={1}>
        <Text>{number} &bull;</Text>
        {
          category && <Text>{category} &bull;</Text>
        }
        <Text>Trending</Text>
      </HStack>
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray">{total} Twix</Text>
    </VStack>
    <Spacer />
    <MenuFilters options={options} icon={<HiDotsHorizontal size={24} />} props={{ px: 2 }} />
  </HStack>
)

export const TrendingList = ({ items }) => {
  const [loadMore, setLoadMore] = useBoolean()

  return (
    <Box bg={mode('gray.50', 'secondary.500')} w="full" borderRadius="xl" p={3}>
      <Heading size="md" my={3}>Philippines Trends</Heading>
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold">#DITOAutoPlay</Text>
        <Text color="gray" fontSize="xs">{`Tuloy-tuloy na data + bonus 10GB, calls & texts every 30 days sa DITO!`}</Text>
        <HStack spacing={1} color="gray">
          <FaExternalLinkSquareAlt size={10} />
          <Text color="gray" fontSize="xs">Promoted by DITO Telecommunity</Text>
        </HStack>
      </VStack>
      <VStack align="start" spacing={4} my={4}>
        {
          (loadMore ? items : items.slice(0,9)).map((item, itemKey) => <TrendingCard key={itemKey} number={itemKey+1} options={options} {...item} />)
        }
      </VStack>
      <Button variant="link" color="primary.500" onClick={() => setLoadMore.toggle()} _focus={{ borderColor: 'white' }} pb={3}>{loadMore ? 'Show less' : 'Show more'}</Button>
    </Box>
  )
}
