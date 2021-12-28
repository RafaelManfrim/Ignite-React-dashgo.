import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { Category } from "./Category";

export function SidebarNav() {
    return (
        <Stack spacing="8" align="flex-start">
            <Category name="Geral">
                <NavLink icon={RiDashboardLine} text="Dashboard" url="" />
                <NavLink icon={RiContactsLine} text="Usuários" url="" />
            </Category>
            <Category name="Automação">
                <NavLink icon={RiInputMethodLine} text="Formulários" url="" />
                <NavLink icon={RiGitMergeLine} text="Automação" url="" />
            </Category>
        </Stack>
    )
}