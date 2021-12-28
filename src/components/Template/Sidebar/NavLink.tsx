import { Text, Link, Icon, LinkProps } from "@chakra-ui/react";
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps{
    icon: ElementType,
    text: string
    url: string
}

export function NavLink({ icon, text, url, ...rest }: NavLinkProps) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{text}</Text>
        </Link>
    )
}