import { Drawer as ChakraDrawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
}

export function Drawer({ isOpen, onClose}: DrawerProps) {
    return (
        <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg="gray.800" p="4">
                    <DrawerCloseButton mt="6"  />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </ChakraDrawer>
    )
}