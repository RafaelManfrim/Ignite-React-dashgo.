import { Box, HStack, Text } from "@chakra-ui/react"
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
    totalOfRegisters: number
    registersPerPage?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1
    }).filter(page => page > 0)
}

export function Pagination({ totalOfRegisters, registersPerPage = 10, currentPage = 1, onPageChange }: PaginationProps) {
    const lastPage = Math.ceil(totalOfRegisters / registersPerPage)
    const previusPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []
    const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

    return (
        <HStack mt="8" justify="end" align="center" spacing="6">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} pageNumber={1} />
                        {currentPage > (2 + siblingsCount) && <Text align="center" fontSize="xl" color="pink.500" w="8">...</Text>}
                    </>
                )}
                {previusPages.length > 0 && previusPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
                })}
                <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent />
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
                })}
                {currentPage + siblingsCount < lastPage && (
                    <>
                        {currentPage + 1 + siblingsCount < lastPage && <Text align="center" fontSize="xl" color="pink.500" w="8">...</Text>}
                        <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
                    </>
                )}
            </HStack>
        </HStack>
    )
}