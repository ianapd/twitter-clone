import { Box, Avatar, HStack, IconButton, Spacer, Button, Stack, VStack, Divider } from "@chakra-ui/react";
import { FormTextArea } from "./Form";

export const Hero = ({ icons }) => (
  <Box pt={16} borderBottomWidth={1} borderBottomColor="gray">
    <HStack align="start" spacing={{ base: 2, md: 6 }} mb={4}>
      <Avatar src="../../avatar-img.jpeg" size="md" />
      <VStack align="start" spacing={3} w="full">
        <FormTextArea variant="unstyled" minH="100px" placeholder="What's happening?" borderRadius="xs" />
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" w="full" align="end">
        <HStack align="start" spacing={0}>
          {
            icons.map((icon, iconKey) => <IconButton key={iconKey} variant="ghost" borderRadius="full" _hover={{ bg: 'rgba(28, 155, 232, 0.1)' }} _focus={{ borderColor: 'white' }} icon={icon} />)
          }
        </HStack>
        <Spacer />
        <Button variant="primary" minW="90px">Tweet</Button>
      </Stack>
      </VStack>
    </HStack>
  </Box>
)