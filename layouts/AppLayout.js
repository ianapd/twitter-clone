import { 
  Box, IconButton, Menu, MenuButton, MenuList, MenuItem, 
  VStack, Spacer, HStack, Flex, useColorModeValue as mode, Heading,
  Button, Avatar, Divider, Text, useDisclosure, Tag, Switch, useColorMode
} from "@chakra-ui/react"
import Head from "next/head"
import { Fragment } from "react"

import { AiFillHome, AiFillLock } from 'react-icons/ai'
import { RiHashtag, RiFileList2Line, RiUserFollowLine } from 'react-icons/ri'
import { IoNotificationsOutline, IoPerson, IoSearchOutline, IoAccessibility, IoClose, IoAdd } from 'react-icons/io5'
import { HiOutlineMail, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { BiRocket, BiMessageRoundedDetail, BiHelpCircle, BiPaint } from 'react-icons/bi'
import { BsBookmark, BsTwitter, BsThreeDots, BsCheck2, BsClock, BsStars } from 'react-icons/bs'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { MdFlashOn } from 'react-icons/md'
import { TbNews } from 'react-icons/tb'
import { FiBarChart2, FiSettings } from 'react-icons/fi'

import { useRouter } from "next/router"
import { AppHeader, AppLinks } from "../components/Header"
import { FormInput } from "../components/Form"

import { TrendingList } from "../collections/TrendingList"

import trendsData from "../data/trends.json"
import usersData from '../data/users.json'
import { CreatorList } from "../collections/CreatorList"
import { Footer } from "../components/Footer"
import Link from "next/link"
import { MobileDrawer } from "../components/Drawer"

export const AppLayout = ({ children }) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const routes = [
    {
      path: '/',
      label: 'Home',
      icon: <AiFillHome size={24} />
    },
    {
      path: '/',
      label: 'Explore',
      icon: <RiHashtag size={24} />
    },
    {
      path: '/',
      label: 'Notifications',
      icon: <IoNotificationsOutline size={24} />
    },
    {
      path: '/',
      label: 'Messages',
      icon: <HiOutlineMail size={24} />
    },
    {
      path: '/',
      label: 'Bookmarks',
      icon: <BsBookmark size={24} />
    },
    {
      path: '/',
      label: 'Lists',
      icon: <RiFileList2Line size={24} />
    },
    {
      path: `/`,
      label: 'Profile',
      icon: <IoPerson size={24} />
    },
    {
      path: `/`,
      label: 'More',
      icon: <HiOutlineDotsCircleHorizontal size={24} />
    },
  ]

  const drawerRoutes = [
    {
      path: `/`,
      route: '/',
      label: 'Profile',
      icon: <IoPerson size={24} />
    },
    {
      path: '/',
      route: '/',
      label: 'Lists',
      icon: <RiFileList2Line size={24} />
    },
    {
      path: '/',
      label: 'Topics',
      icon: <BiMessageRoundedDetail size={24} />
    },
    {
      path: '/',
      label: 'Bookmarks',
      icon: <BsBookmark size={24} />
    },
    {
      path: '/',
      label: 'Moments',
      icon: <MdFlashOn size={24} />
    },
    {
      path: '/',
      label: 'Newsletters',
      icon: <TbNews size={24} />
    },
    {
      path: `/`,
      label: 'Follower requests',
      icon: <RiUserFollowLine size={24} />
    },
    {
      path: '/',
      label: 'Twitter for Professionals',
      icon: <BiRocket size={24} />
    },
    {
      path: '/',
      label: 'Twitter Ads',
      icon: <FaExternalLinkSquareAlt size={24} />
    },
    {
      path: `/`,
      label: 'Analytics',
      icon: <FiBarChart2 size={24} />
    },
    {
      path: '/',
      label: 'Settings and privacy',
      icon: <FiSettings size={24} />
    },
    {
      path: `/`,
      label: 'Help Center',
      icon: <BiHelpCircle size={24} />
    },
    {
      path: `/`,
      label: 'Data saver',
      icon: <BsClock size={24} />
    },
    {
      path: '/',
      label: 'Display',
      icon: <BiPaint size={24} />
    },
    {
      path: `/`,
      label: 'Keyboard shortcuts',
      icon: <IoAccessibility size={24} />
    },
  ]

  const menuRoutes = [
    {
      path: `/`,
      label: 'Follower requests',
      icon: <RiUserFollowLine size={24} />
    },
    {
      path: '/',
      label: 'Topics',
      icon: <BiMessageRoundedDetail size={24} />
    },
    {
      path: '/',
      label: 'Moments',
      icon: <MdFlashOn size={24} />
    },
    {
      path: '/',
      label: 'Newsletters',
      icon: <TbNews size={24} />
    },
    {
      path: '/',
      label: 'Twitter for Professionals',
      icon: <BiRocket size={24} />
    },
    {
      path: '/',
      label: 'Twitter Ads',
      icon: <FaExternalLinkSquareAlt size={24} />
    },
    {
      path: `/`,
      label: 'Analytics',
      icon: <FiBarChart2 size={24} />
    },
    {
      path: '/',
      label: 'Settings and privacy',
      icon: <FiSettings size={24} />
    },
    {
      path: `/`,
      label: 'Help Center',
      icon: <BiHelpCircle size={24} />
    },
    {
      path: '/',
      label: 'Display',
      icon: <BiPaint size={24} />
    },
    {
      path: `/`,
      label: 'Keyboard shortcuts',
      icon: <IoAccessibility size={24} />
    },
  ]

  const bottomLinks = [
    {
      path: '/',
      label: 'Home',
      icon: <AiFillHome size={24} />
    },
    {
      path: '/',
      label: 'Explore',
      icon: <IoSearchOutline size={24} />
    },
    {
      path: '/',
      label: 'Notifications',
      icon: <IoNotificationsOutline size={24} />
    },
    {
      path: '/',
      label: 'Messages',
      icon: <HiOutlineMail size={24} />
    }
  ] 

  const MoreMenu = ({ options = [], label, icon, props }) => (
    <Menu placement="top-start" autoSelect={false} closeOnSelect={true}>
      <MenuButton as={Button} size="xs" variant="ghost" _focus={{ borderColor: 'white' }} _hover={{ bg: mode('gray.100', 'black.500') }} borderRadius="full" py={6} pr={2} _active={{ bg: mode('gray.100', 'black.500'), fontWeight: 'extrabold' }} {...props}>
        <HStack spacing={6}>
          {icon}
          <Text fontSize="xl" fontWeight="bold">{label}</Text>
        </HStack>
      </MenuButton>
      <MenuList bg={mode('gray.50', 'black.500')} p={4} borderRadius="lg" border={0}>
        <MenuItem>
          <HStack w="full" justify="space-between">
            <HStack spacing={6}>
              {options[0].icon}
              <Text fontSize="sm" fontWeight="regular">{options[0].label}</Text>
            </HStack>
            <Tag size="sm" color="white" borderRadius="full" bg="primary.500">9</Tag>
          </HStack>  
        </MenuItem>
        {
          options.slice(1,7).map((option, optionKey) => 
            <MenuItem key={optionKey}>
              <HStack spacing={6}>
                {option.icon}
                <Text fontSize="sm" fontWeight="regular">{option.label}</Text>
              </HStack>
            </MenuItem>
          )
        }
        <Divider mt={3} />
         <Box mt={3}>
          {
            options.slice(7,9).map((option, optionKey) => 
              <MenuItem key={optionKey}>
                <HStack spacing={6}>
                  {option.icon}
                  <Text fontSize="sm" fontWeight="regular">{option.label}</Text>
                </HStack>
              </MenuItem>
            )
          }
        </Box>
        <MenuItem onClick={toggleColorMode}>
          <HStack spacing={6}>
            {options[9].icon}
            <Text fontSize="sm" fontWeight="regular">{options[9].label}</Text>
          </HStack>
        </MenuItem>
        <MenuItem>
          <HStack spacing={6}>
            {options[10].icon}
            <Text fontSize="sm" fontWeight="regular">{options[10].label}</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  )

  const MenuItemsList = () => (
    <MenuList bg={mode('gray.50', 'black.500')} borderRadius="xl" boxShadow="base" w="250px" border={1}>
      <HStack w="full" spacing={2} p={4}>
        <Avatar size="sm" src="../../avatar-img.jpeg" />
        <VStack align="start" spacing={0}>
          <HStack>
            <Text fontWeight="bold">Ian Sui</Text>
            <AiFillLock size={24} />
          </HStack>
          <Text color="gray" fontWeight="regular">@iansui</Text>
        </VStack>
        <Spacer />
        <BsCheck2 color="#1C9BE8" size={24} />
      </HStack>
      <Divider color="gray" mb={4} />
      <MenuItem>Add an existing account</MenuItem>    
      <MenuItem>Log out @iansui</MenuItem>   
    </MenuList>
  )
  
  const LeftSideBar = () => (
    <Flex 
      h="100vh"
      pt={4}
      px={6}
      display={{ base: 'none', xl: 'flex' }} 
      pos="fixed" w="300px"
      top={0} left={{ base: 24, '2xl': 64 }} bottom={0}>
      <VStack spacing={8} align="start">
        <IconButton variant="ghost" size="md" ml={5} hover={{ bg: 'primary.500' }} icon={<BsTwitter size={32} />} onClick={() => router.push('/')} />
        <Box>
          <AppLinks
            routes={routes.slice(0,6)}
            mb={2}
          />
          <MoreMenu options={menuRoutes} icon={routes[7].icon} label={routes[7].label}  />
        </Box>
        <Button variant="primary" minW="250px">Tweet</Button>
        <Spacer />
        <Box pb={8} w="full">
          <Menu placement="top-start" w="full">
            <MenuButton
              w="full"
              size="md"
              as={Button} variant="unstyled" _focus={{ borderColor: 'white' }}>
              <HStack w="full" spacing={2}>
                <Avatar src="../../avatar-img.jpeg" size="md" />
                <VStack align="start" spacing={0}>
                  <HStack>
                    <Text fontWeight="bold">Ian Sui</Text>
                    <AiFillLock size={16} />
                  </HStack>
                  <Text color="gray" fontWeight="regular">@iansui</Text>
                </VStack>
                <Spacer />
                <BsThreeDots size={24} />
              </HStack>
            </MenuButton>
            <MenuItemsList />
          </Menu>  
        </Box>
      </VStack>
    </Flex>
  )

  const TabletLeftSide = () => (
    <VStack display={{ base: 'none', md: 'flex', xl: 'none' }} bg={mode('white', 'black')} pt={4} h="100vh" w="80px" spacing={8} pos="fixed" top={0} left={0}>
      <IconButton variant="ghost" size="md" hover={{ bg: 'primary.500' }} icon={<BsTwitter size={32} />} onClick={() => router.push('/')} />
      {
        routes.map((link, linkKey) => 
          <Link key={linkKey} href={link.path}>
            <IconButton variant="ghost" _focus={{ borderColor: 'white' }} icon={link.icon} />
          </Link>
        )
      }
      <Spacer />
      <Box pb={6}>
        <Menu placement="top-start">
          <MenuButton
            size="sm"
            as={Button} variant="unstyled" _focus={{ borderColor: 'white' }} borderRadius="full">
              <Avatar size="sm" src="../../avatar-img.jpeg" />
          </MenuButton>
          <MenuItemsList />
        </Menu>
      </Box>
    </VStack>
  )

  const RightSideBar = () => (
    <Box
      minH="100vh"
      px={6}         
      top={0}
      bottom={0}
      right={{ base: 0, xl: 24, '2xl': 64 }}
      display={{ base: 'none', lg: 'block' }} 
      pos="fixed"
      overflow="scroll"
      w="350px">
      <Box pos="fixed" pb={2} backdropFilter="blur(20px)" zIndex={1000} bg={mode('white', 'black')} w="305px"> 
        <FormInput 
          size="md"
          borderRadius="full" 
          placeholder="Search Twitter"
          bg={mode('gray.50', 'secondary.600')}
          _focus={{ borderColor: 'white' }}
          borderWidth={0}
          left={<IconButton variant="unstyled" color="gray" _focus={{ borderColor: 'white' }} pl={4} icon={<IoSearchOutline color="gray" />} />}
        />
      </Box>  
      <VStack spacing={6} align="start" mt={20}>
        <TrendingList items={trendsData} />
        <CreatorList users={usersData} />
        <Footer />
      </VStack>
    </Box>
  )

  const BottomSideBar = () => (
    <HStack zIndex={1000} display={{ base: 'flex', md: 'none' }} bg={mode('white', 'black')} m={0} justify="center" w="full" h="75px" spacing={10} pos="fixed" bottom={0} right={0} borderTopWidth="gray" borderWidth={1} boxShadow="base">
      {
        bottomLinks.map((link, linkKey) => 
          <Link key={linkKey} href={link.path}>
            <IconButton variant="ghost" color={link.route == router.route ? 'primary.500' : mode('black','white')} _focus={{ borderColor: 'white' }} icon={link.icon} />
          </Link>
        )
      }
    </HStack>
  )

  const TwitterDrawer = () => (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <Box>
        <HStack pr={8} pos="fixed" w="full" h="50px" bg={mode('white','black')} justify="space-between">
          <Heading size="sm">Account info</Heading>
          <IconButton
            variant="unstyled"
            size="sm"
            onClick={onClose}
            _focus={{ borderColor: 'white' }}
            icon={<IoClose size={24} />}
          />
        </HStack>
        <HStack align="start" w="full" pt={12} pb={2}>
          <VStack align="start" spacing={1}>
            <Avatar src="../../avatar-img.jpeg" size="md" />
            <HStack>
              <Text fontWeight="bold">Ian Sui</Text>
              <AiFillLock size={16} />
            </HStack>
            <Text color="gray" fontWeight="regular">@iansui</Text>
          </VStack>
          <Spacer />
          <IconButton variant="outline" borderColor="gray.800" size="sm" borderWidth={1} borderRadius="full" icon={<IoAdd />} />
        </HStack>
        <HStack align="start" spacing={4} pb={4}>
          <HStack spacing={1}>
            <Text>329</Text>
            <Text color="gray">Following</Text>
          </HStack>
          <HStack spacing={1}>
            <Text>159</Text>
            <Text color="gray">Followers</Text>
          </HStack>
        </HStack>
        <AppLinks 
          routes={drawerRoutes.slice(0,5)} />
        <HStack w="full" justify="space-between" pb={2}>
          <Button size="sm" variant="ghost" _focus={{ borderColor: 'white' }} _hover={{ bg: 'black.500' }} borderRadius="full" py={6} _active={{ bg: 'black.500', fontWeight: 'extrabold' }}>
            <HStack spacing={6}>
              {drawerRoutes[6].icon}
              <Text fontSize="xl" fontWeight="bold">{drawerRoutes[6].label}</Text>
            </HStack>
          </Button>
          <Tag size="sm" color="white" borderRadius="full" bg="primary.500">9</Tag>
        </HStack>  
        <Divider pt={3} />
        <AppLinks 
          pt={3}
          routes={drawerRoutes.slice(7,10)} />
        <Divider pt={3} />
        <AppLinks 
          pt={3}
          routes={drawerRoutes.slice(10, 12)} />
        <Divider pt={3} />
        <HStack w="full" justify="space-between" pt={3} pb={2}>
          <Button size="sm" variant="ghost" _focus={{ borderColor: 'white' }} _hover={{ bg: 'black.500' }} borderRadius="full" py={6} _active={{ bg: 'black.500', fontWeight: 'extrabold' }}>
            <HStack spacing={6}>
              {drawerRoutes[12].icon}
              <Text fontSize="xl" fontWeight="bold">{drawerRoutes[12].label}</Text>
            </HStack>
          </Button>
          <Switch />
        </HStack>  
        <HStack w="full" justify="space-between" pb={2}>
          <Button size="sm" variant="ghost" _focus={{ borderColor: 'white' }} _hover={{ bg: 'black.500' }} borderRadius="full" py={6} _active={{ bg: 'black.500', fontWeight: 'extrabold' }} onClick={toggleColorMode}>
            <HStack spacing={6}>
              {drawerRoutes[13].icon}
              <Text fontSize="xl" fontWeight="bold">{drawerRoutes[13].label}</Text>
            </HStack>
          </Button>
        </HStack>  
        <AppLinks
          routes={drawerRoutes.slice(14)} />
        <Divider pt={3} />
        <Text pt={3} pb={32} fontSize="xl">Log out</Text>
      </Box>
    </MobileDrawer>
  )

  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;300;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="../../twitter-logo.png" />
      </Head>
      <Flex direction="row" bg={mode('white', 'black')}>
        <LeftSideBar />
        <TabletLeftSide />
        <BottomSideBar />
        <TwitterDrawer />
        <Box w="full" borderLeftColor="gray" borderLeftWidth={{ base: 0, md: 1 }} borderRightColor="gray" borderRightWidth={{ base: 0, xl: 1 }} minH="100vh" ml={{ base: 0, md: '80px', xl: '400px', '2xl': '580px' }} mr={{ base: 0, lg: '340px', xl: '450px', '2xl': '620px' }}>
          <AppHeader>
            <Avatar display={{ base: 'flex', md: 'none' }} size="sm" src="../../avatar-img.jpeg" onClick={onOpen} />
            <Text fontSize="xl" fontWeight="bold">Home</Text> 
            <Spacer />
            <IconButton variant="ghost" borderRadius="full" _hover={{ bg: 'secondary.600' }} icon={<BsStars size={24} />} />
          </AppHeader>
          {children}
        </Box>
        <RightSideBar />
      </Flex>
    </Fragment>
  )
}