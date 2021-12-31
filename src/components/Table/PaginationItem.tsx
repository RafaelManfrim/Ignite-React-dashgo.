import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    isCurrent?: true
    pageNumber: number
    onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent, pageNumber, onPageChange }: PaginationItemProps) {
    return isCurrent ? (
        <Button size="sm" fontSize="xs" w="4" colorScheme="pink" disabled _disabled={{ bg: 'pink.500', cursor: 'default'}}>{pageNumber}</Button>
    ) : (
        <Button size="sm" fontSize="xs" w="4" bg="gray.700" onClick={() => onPageChange(pageNumber)}>{pageNumber}</Button>
    )
}