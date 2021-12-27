import { Box, Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { SidebarCategory } from "./SidebarCategory";

export function Sidebar() {
    return (
        <Box as="aside" w="44" mr="8">
            <Stack spacing="8" align="flex-start">
                <SidebarCategory name="Geral">
                    <NavLink icon={RiDashboardLine} text="Dashboard" url="" />
                    <NavLink icon={RiContactsLine} text="Usuários" url="" />
                </SidebarCategory>
                <SidebarCategory name="Automação">
                    <NavLink icon={RiInputMethodLine} text="Formulários" url="" />
                    <NavLink icon={RiGitMergeLine} text="Automação" url="" />
                </SidebarCategory>
            </Stack>
        </Box>
    )
}