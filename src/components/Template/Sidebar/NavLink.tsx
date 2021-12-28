import { Text, Link as ChakraLink, Icon, LinkProps, textDecoration } from "@chakra-ui/react";
import { ElementType } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

interface NavLinkProps extends LinkProps{
    icon: ElementType,
    text: string
    url: string
}

export function NavLink({ icon, text, url, ...rest }: NavLinkProps) {
    const router = useRouter()

    const isActive = router.asPath.startsWith(url)

    return (
        <Link href={url} passHref>
            <ChakraLink display="flex" align="center" _hover={{ textDecoration: 'none', color: 'pink.300' }} color={isActive ? 'pink.500' : ''} {...rest} >
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{text}</Text>
            </ChakraLink>
        </Link>
    )
}