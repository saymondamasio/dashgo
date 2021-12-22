import { Button } from '@chakra-ui/react'

interface Props {
  number: number
  isCurrent?: boolean
}

export function PaginationItem({ isCurrent = false, number }: Props) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.500' }}
    >
      {number}
    </Button>
  )
}
