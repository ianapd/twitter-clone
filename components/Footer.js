import { 
  Box, HStack, Text, Wrap, WrapItem, Menu, 
  MenuButton, MenuItem, MenuList, Button, useColorModeValue as mode
} from "@chakra-ui/react";
import { HiDotsHorizontal } from "react-icons/hi";

const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Accessibility",
  "Ads info"
]

const menuLinks = [
  "About",
  "Status",
  "Twitter for Business",
  "Developers"
]

const FooterMenu = ({ options = [], label, icon, props }) => (
  <Menu placement="bottom-end" autoSelect={false} closeOnSelect={true}>
    <MenuButton as={Button} variant="link" fontWeight="regular" color="gray" size="sm" _focus={{ borderColor: 'white' }} {...props}>
      <HStack spacing={1}>
        <Text fontSize="sm">{label}</Text>
        {icon}
      </HStack>
    </MenuButton>
    <MenuList bg={mode('gray.50', 'black.500')} borderRadius="lg" border={0}>
      {
        options.map((option, optionKey) => <MenuItem key={optionKey}>{option}</MenuItem>)
      }
    </MenuList>
  </Menu>
)

export const Footer = ({ }) => (
  <Box pb={32}>
    <Wrap pb={2} spacing={3}>
      {
        footerLinks.map((footer, footerKey) => (
          <WrapItem key={footerKey}>
            <Button variant="link" fontWeight="regular" size="sm" color="gray" _focus={{ borderColor: 'white' }}>{footer}</Button>
          </WrapItem>
        ))
      }
      <WrapItem>
        <FooterMenu options={menuLinks} label="More" icon={<HiDotsHorizontal size={8} />} props={{ px: 2 }} />
      </WrapItem>
    </Wrap>
    <Text color="gray" fontSize="sm">&copy; 2022 Twitter, Inc.</Text>
  </Box>
)