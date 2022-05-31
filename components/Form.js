import React from 'react'
import {
  InputGroup, InputLeftElement, InputRightElement, Tag,
  Input, FormControl, FormLabel, Textarea
} from '@chakra-ui/react'

export const FormInput = ({ label, left, right, rightProps, controlProps, tag, ...rest }) => (
  <FormControl {...controlProps}>
    <FormLabel fontSize="sm" fontWeight="bold">{label} {tag && <Tag size="sm">{tag}</Tag>}</FormLabel>
    <InputGroup>
      { left && <InputLeftElement children={left} /> }
      <Input {...rest} />
      { right && <InputRightElement w="4.5rem" {...rightProps}>{right}</InputRightElement> }
    </InputGroup>
  </FormControl>
)

export const FormTextArea = ({ label, left, right, controlProps, tag, ...rest }) => (
  <FormControl {...controlProps}>
    <FormLabel fontSize="sm" fontWeight="bold">{label} {tag && <Tag size="sm">{tag}</Tag>}</FormLabel>
    <InputGroup>
      { left && <InputLeftElement children={left} /> }
      <Textarea {...rest} />
      { right && <InputRightElement width="4.5rem">{right}</InputRightElement> }
    </InputGroup>
  </FormControl>
)
