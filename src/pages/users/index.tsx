import { Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, HStack } from '@chakra-ui/react'
import { Base } from '../../components/Template/Base'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Table/Pagination'

export default function UserList() {
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
                            <Th px="6" color="gray.300" w="8">
                                <Checkbox colorScheme="pink"/>
                            </Th>
                            <Th>Usuário</Th>
                            <Th>Data de cadastro</Th>
                            <Th w="32">Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Rafael Manfrim</Text>
                                    <Text fontSize="sm" color="gray.300">rafaelmanfrim2004@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>04 de Abril de 2021</Td>
                            <Td>
                                <HStack>
                                    <Button size="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine}></Icon>}>
                                        Editar
                                    </Button>
                                    <Button size="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine}></Icon>}>
                                        Deletar
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        {/* { Mais usuários } */}

                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Lucas</Text>
                                    <Text fontSize="sm" color="gray.300">emaillucas@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>22 de Setembro de 2021</Td>
                            <Td>
                                <HStack>
                                    <Button size="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine}></Icon>}>
                                        Editar
                                    </Button>
                                    <Button size="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine}></Icon>}>
                                        Deletar
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Marcos</Text>
                                    <Text fontSize="sm" color="gray.300">marcos.marcos@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>16 de Junho de 2020</Td>
                            <Td>
                                <HStack>
                                    <Button size="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine}></Icon>}>
                                        Editar
                                    </Button>
                                    <Button size="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine}></Icon>}>
                                        Deletar
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Júlio</Text>
                                    <Text fontSize="sm" color="gray.300">ju@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>30 de Janeiro de 2021</Td>
                            <Td>
                                <HStack>
                                    <Button size="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine}></Icon>}>
                                        Editar
                                    </Button>
                                    <Button size="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine}></Icon>}>
                                        Deletar
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