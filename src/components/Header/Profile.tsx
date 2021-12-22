import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

interface Props {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: Props) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Saymon Damásio</Text>
          <Text color="gray.300" fontSize="small">
            saymon.damasio95@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Saymon Damásio"
        src="https://github.com/saymondamasio.png"
      />
    </Flex>
  )
}
