import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiLogoutBoxLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { Category } from "./Category";

export function SidebarNav() {
    return (
        <Stack spacing="8" align="flex-start">
            <Category name="Geral">
                <NavLink icon={RiDashboardLine} text="Dashboard" url="/dashboard" />
                <NavLink icon={RiContactsLine} text="Usuários" url="/users" />
            </Category>
            <Category name="Automação">
                <NavLink icon={RiInputMethodLine} text="Formulários" url="/forms" />
                <NavLink icon={RiGitMergeLine} text="Automação" url="/automation" />
            </Category>
            <Category name="Menu">
                <NavLink icon={RiLogoutBoxLine} text="Sair" url="/" color="red.400" _hover={{}}/>
            </Category>
        </Stack>
    )
}