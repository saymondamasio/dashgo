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

      <InputGroup
        ml="6"
        alignSelf="center"
        flex="1"
        color="gray.200"
        bgColor="gray.800"
        borderRadius="full"
        py="4"
        maxWidth={400}
      >
        <Input
          pl="8"
          px="4"
          mr="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <InputRightElement
          mr="4"
          h="100%"
          pointerEvents="none"
          children={<RiSearchLine fontSize="20" color="gray.300" />}
        />
      </InputGroup>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Saymon Damásio</Text>
            <Text color="gray.300" fontSize="small">
              saymon.damasio95@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Saymon Damásio"
            src="https://github.com/saymondamasio.png"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
