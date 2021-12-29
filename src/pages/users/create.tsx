import { Flex, Box, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Base } from "../../components/Template/Base";
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').max(32, 'Por favor, abrevie seu nome'),
    email: yup.string().required('Campo obrigatório').email(),
    password: yup.string().required('Campo obrigatório').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = data => {
        router.push('/users')
    }

    return (
        <Base>
            <Box as='form' flex="1" borderRadius="8px" bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                <Divider my="6" borderColor="gray.700" />
                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <Input label="Nome completo" error={formState.errors.name} {...register('name')}/>
                        <Input label="Email" type="email" error={formState.errors.email} {...register('email')}/>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <Input label="Senha" type="password" error={formState.errors.password} {...register('password')} />
                        <Input label="Confirme sua senha" type="password" error={formState.errors.password_confirmation} {...register('password_confirmation')}/>
                    </SimpleGrid>
                </VStack>
                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
       </Base>
    )
}