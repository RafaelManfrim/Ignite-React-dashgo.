import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { SearchBox } from './SearchBox'

export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth="1480px" h="20" mx="auto" mt="4" px="6" align="center">
            <Logo />
            <SearchBox />
            <Nav />
        </Flex>
    )
}