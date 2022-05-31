import { Fragment } from 'react'
import Link from 'next/link'
import {
  Box, HStack, Container, Button, Stack, Divider, useColorModeValue as mode, Text
} from '@chakra-ui/react'

export const AppHeader = ({ children, alert }) => (
  <Box>
    <Box
      bg={mode('white', 'black')}
      backdropFilter="blur(20px)"
      w={{ base: 'full', md: '2xl', lg: 'xl' }}
      pos="fixed" zIndex="1000" py={2}>
      <Container maxW="container.xl">
        <HStack spacing={4}>
          {children}
        </HStack>
      </Container>
    </Box>
  </Box>
)

export const AppLinks = ({ routes = [], direction = 'column', children, btnProps, ...rest }) => (
  <Stack
    direction="column"
    align="start"
    spacing={2}
    {...rest}>
    {
      routes.map((route, rId) =>
        route.isDivider
        ? <Divider key={route.key} orientation={direction === 'row' ? 'vertical' : 'horizontal'} h={direction == 'column' ? 'auto' : '30px'} alignSelf="center" borderWidth="1px" />
        : route.render ? <Fragment key={rId}>{route.render()}</Fragment> : 
        <Link href={route.path} key={route.path}>
          <Button size="xs" variant="ghost" _focus={{ borderColor: 'white' }} _hover={{ bg: mode('gray.100', 'black.500') }} borderRadius="full" py={6} pr={2} _active={{ bg: mode('gray.100', 'black.500'), fontWeight: 'extrabold' }} {...route.btnProps} {...btnProps}>
            <HStack spacing={6}>
              {route.icon}
              <Text fontSize="xl" fontWeight="bold">{route.label}</Text>
            </HStack>
          </Button>
        </Link>)
    }
    {children}
  </Stack>
)