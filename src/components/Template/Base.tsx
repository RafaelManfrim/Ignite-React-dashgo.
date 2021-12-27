import { Flex } from "@chakra-ui/react";
import { Header, Sidebar } from './index'

interface BaseProps {
    children: React.ReactNode
}

export function Base({ children }: BaseProps) {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
                <Sidebar />
                {children}
            </Flex>
        </Flex>
    )
}