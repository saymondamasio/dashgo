import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'

import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import { NotificationsNav } from './Header/NotificationsNav'
import { Profile } from './Header/Profile'
import { SearchBox } from './Header/SearchBox'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text color="pink.500" as="span" ml="1">
          .
        </Text>
      </Text>

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  )
}
