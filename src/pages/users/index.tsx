import { useState, useEffect } from 'react'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import Link from 'next/link'
import { Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, HStack, Spinner, useBreakpointValue } from '@chakra-ui/react'
import { Base } from '../../components/Template/Base'
import { Pagination } from '../../components/Table/Pagination'
import { useUsers } from '../../services/hooks/useUsers'

type User = {
    name: string
    email: string
    createdAt: string
}

export default function UserList() {
    const { data, isLoading, isFetching, refetch, error } = useUsers()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const [userList, setUserList] = useState<User[]>([])

    useEffect(() => {
        if(data) {
            setUserList(data)
        }
    }, [data])

    function renderUserList() {
        return userList.map((userData, i) =>(
            <Tr key={userData.name+i}>
                <Td px={["2", "4"]}>
                    <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                    <Box>
                        <Text fontWeight="bold">{userData.name}</Text>
                        <Text fontSize="sm" color="gray.300">{userData.email}</Text>
                    </Box>
                </Td>
                {isWideVersion && <Td fontSize={["sm", "sm", "md"]}>{new Date(userData.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })}</Td>}
                <Td>
                    <HStack justify="end">
                        <Button size="sm" colorScheme="blue">
                            <Icon as={RiPencilLine} fontSize="16" />
                        </Button>
                        <Button size="sm" colorScheme="red">
                            <Icon as={RiDeleteBinLine} fontSize="16" />
                        </Button>
                    </HStack>
                </Td>
            </Tr>
        ))
    }

    return (
        <Base>
            <Box flex="1" borderRadius="8px" bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">
                        Usuários {!isLoading && isFetching && <Spinner speed='0.65s' emptyColor='gray.300' color='pink.400' size='sm' />}
                    </Heading>
                    <Link href="/users/create" passHref>
                        <Button size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Criar novo usuário</Button>
                    </Link>
                </Flex>
                {isLoading ? (
                    <Flex justify="center" align="center" h={128}>
                        <Spinner thickness='6px' speed='0.65s' emptyColor='gray.400' color='pink.500' size='xl' />
                    </Flex>
                ) : error ? (
                    <Flex justify="center">
                        Falha ao obter dados dos usuários
                    </Flex>
                ) : (
                    <>
                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["2", "4"]} color="gray.300" w={3}>
                                        <Checkbox colorScheme="pink"/>
                                    </Th>
                                    <Th>Usuário</Th>
                                    {isWideVersion && <Th>Data de cadastro</Th>}
                                    <Th w="12" textAlign="right">Ações</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {renderUserList()}
                            </Tbody>
                        </Table>
                        <Pagination />
                    </>
                )}
            </Box>
        </Base>
    )
}