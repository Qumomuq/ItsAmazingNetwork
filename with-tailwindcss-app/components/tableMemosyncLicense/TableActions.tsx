import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiAddFill, RiArrowRightUpLine } from 'react-icons/ri'

export const TableActions = () => {
  return (
    <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
      <HStack>

      </HStack>
      <ButtonGroup size="sm" variant="outline">
        <Button iconSpacing="1" leftIcon={<RiAddFill/>}>
          Добавить Memosync
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
