import { Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, HStack, useBreakpointValue } from '@chakra-ui/react'
import { Base } from '../../components/Template/Base'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Table/Pagination'

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Base>
            <Box flex="1" borderRadius="8px" bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Criar novo usuário</Button>
                </Flex>
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
                        <Tr>
                            <Td px={["2", "4"]}>
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Rafael Manfrim</Text>
                                    <Text fontSize="sm" color="gray.300">rafaelmanfrim2004@gmail.com</Text>
                                </Box>
                            </Td>
                            {isWideVersion && <Td fontSize={["sm", "sm", "md"]}>04 de Abril de 2021</Td>}
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
                        {/* { Mais usuários } */}

                        <Tr>
                            <Td px={["2", "4"]}>
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Lucas</Text>
                                    <Text fontSize="sm" color="gray.300">emaillucas@gmail.com</Text>
                                </Box>
                            </Td>
                            {isWideVersion && <Td fontSize={["sm", "sm", "md"]}>22 de Setembro de 2021</Td>}
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
                        <Tr>
                            <Td px={["2", "4"]}>
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Marcos</Text>
                                    <Text fontSize="sm" color="gray.300">marcos.marcos@gmail.com</Text>
                                </Box>
                            </Td>
                            {isWideVersion && <Td fontSize={["sm", "sm", "md"]}>16 de Junho de 2020</Td>}
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
                        <Tr>
                            <Td px={["2", "4"]}>
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Júlio</Text>
                                    <Text fontSize="sm" color="gray.300">ju@gmail.com</Text>
                                </Box>
                            </Td>
                            {isWideVersion && <Td fontSize={["sm", "sm", "md"]}>30 de Janeiro de 2021</Td>}
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
                    </Tbody>
                </Table>
                <Pagination />
            </Box>
        </Base>
    )
}