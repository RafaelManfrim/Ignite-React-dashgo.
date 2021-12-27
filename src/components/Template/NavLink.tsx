import { Text, Link, Icon } from "@chakra-ui/react";
import { IconType } from 'react-icons'

interface NavLinkProps {
    icon: IconType,
    text: string
    url: string
}

export function NavLink({ icon, text, url }: NavLinkProps) {
    return (
        <Link display="flex" align="center" >
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{text}</Text>
        </Link>
    )
}