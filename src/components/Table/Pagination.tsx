import { Box, HStack, Button } from "@chakra-ui/react"
import { PaginationItem } from './PaginationItem'

export function Pagination() {
    return (
        <HStack mt="8" justify="end" align="center" spacing="6">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem pageNumber={1} isCurrent/>
                <PaginationItem pageNumber={2}/>
                <PaginationItem pageNumber={3}/>
                <PaginationItem pageNumber={4}/>
            </HStack>
        </HStack>
    )
}