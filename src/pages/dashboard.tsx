import { Flex } from "@chakra-ui/react";
import { Header, Sidebar } from "../components/Template";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
                <Sidebar />
            </Flex>
        </Flex>
    )
}