import { Flex, Box, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Base } from "../../components/Template/Base";

export default function CreateUser() {
    return (
        <Base>
            <Box flex="1" borderRadius="8px" bg="gray.800" p={["6", "8"]}>
                <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                <Divider my="6" borderColor="gray.700" />
                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <Input name="name" label="Nome completo" />
                        <Input name="email" label="Email" type="email" />
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <Input name="password" label="Senha" />
                        <Input name="password_confirmation" label="Confirme sua senha" type="password" />
                    </SimpleGrid>
                </VStack>
                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                        <Button colorScheme="pink">Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
       </Base>
    )
}