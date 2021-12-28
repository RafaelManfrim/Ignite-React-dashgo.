import { Box, Stack, Text } from "@chakra-ui/react";

interface CategoryProps {
    children: React.ReactNode
    name: string
}

export function Category({ name, children }: CategoryProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{name.toUpperCase()}</Text>
            <Stack spacing="3" mt="4" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}