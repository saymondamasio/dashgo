import { Box, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface Props {
  totalCountOfRegisters?: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return (
    [...new Array(to - from)]
      // populando array com números sequenciais tirando o primeiro
      .map((_, index) => from + index + 1)
      // filtrar paginas invalidas
      .filter(page => page > 0)
  )
}

export function Pagination({
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
  totalCountOfRegisters = 0,
}: Props) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} page={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map(page => (
            <PaginationItem
              key={page}
              onPageChange={onPageChange}
              page={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          page={currentPage}
          isCurrent
        />

        {nextPage.length > 0 &&
          nextPage.map(page => (
            <PaginationItem
              key={page}
              onPageChange={onPageChange}
              page={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} page={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
