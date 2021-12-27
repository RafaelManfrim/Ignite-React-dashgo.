import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth="1480px" h="20" mx="auto" mt="4" px="6" align="center">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="44">
                dashgo <Text as="span" color="pink.500">.</Text>
            </Text>
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth="400px" alignSelf="center" position="relative" color="gray.200" bg="gray.800" borderRadius="full"> 
                <Input px="4" mr="4" color="gray.50" variant="unstyled" placeholder="Buscar na plataforma" _placeholder={{ color: 'gray.400' }}/>
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>
            <Flex align="center" ml="auto" >
                <HStack spacing="6" mx="8" pr="8" py="1" color="gray.300" borderRightWidth="1px" borderColor="gray.700">
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Rafael Manfrim</Text>
                        <Text color="gray.300" fontSize="small">rafaelmanfrim2004@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Rafael Manfrim" src="https://avatars.githubusercontent.com/u/72226013?v=4" />
                </Flex>
            </Flex>
        </Flex>
    )
}