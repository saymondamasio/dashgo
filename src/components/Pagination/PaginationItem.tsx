import { Button } from '@chakra-ui/react'

interface Props {
  page: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  page,
  onPageChange,
}: Props) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
    >
      {page}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.500' }}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  )
}
