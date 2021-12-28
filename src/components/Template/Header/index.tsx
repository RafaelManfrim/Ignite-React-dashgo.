import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../../data/context/SidebarDrawerContext'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { SearchBox } from './SearchBox'

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as="header" w="100%" maxWidth="1480px" h="20" mx="auto" mt="4" px="6" align="center">
            { !isWideVersion && (
                <IconButton aria-label="Abrir menu" icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" mt="2" mr="4" onClick={onOpen}/>
            )}
            <Logo />
            {isWideVersion && (<SearchBox />)}
            <Nav showProfileData={isWideVersion} />
        </Flex>
    )
}