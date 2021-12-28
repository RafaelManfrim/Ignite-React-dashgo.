import { Flex, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

interface NavProps {
    showProfileData?: boolean
}

export function Nav({ showProfileData = true }: NavProps) {
    return (
        <Flex align="center" ml="auto" >
            <HStack spacing={["3","6"]} mx={["4","8"]} pr={["4","8"]} py="1" color="gray.300" borderRightWidth="1px" borderColor="gray.700">
                <Icon as={RiNotificationLine} fontSize={["16", "20"]} />
                <Icon as={RiUserAddLine} fontSize={["16", "20"]} />
            </HStack>
            <Flex align="center">
                {showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Rafael Manfrim</Text>
                        <Text color="gray.300" fontSize="small">rafaelmanfrim2004@gmail.com</Text>
                    </Box>
                )}
                <Avatar size={showProfileData ? "md" : "sm"} name="Rafael Manfrim" src="https://avatars.githubusercontent.com/u/72226013?v=4" />
            </Flex>
        </Flex>
    )
}