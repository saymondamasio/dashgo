import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

export function Profile() {
  return (
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
  )
}
