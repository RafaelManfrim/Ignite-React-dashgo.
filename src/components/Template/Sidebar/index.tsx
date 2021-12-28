import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../../data/context/SidebarDrawerContext";
import { Drawer } from "./Drawer";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if(isDrawerSidebar) {
        return <Drawer isOpen={isOpen} onClose={onClose} />
    }

    return (
        <Box as="aside" w="44" mr="8">
            <SidebarNav />
        </Box>
    )
}