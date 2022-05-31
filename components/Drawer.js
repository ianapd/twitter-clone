import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spinner,
  Heading,
  Button,
  HStack,
  IconButton,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react"

export const MobileDrawer = ({ children, header, footer, isLoading, onClose, ...rest }) => (
  <Drawer placement="left" size="md" onClose={onClose} {...rest}>
    <DrawerOverlay />
    <DrawerContent backdropFilter="blur(20px)" bg={useColorModeValue('white','black')}>
      <DrawerBody>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
)
