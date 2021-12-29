import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack } from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import Router from 'next/router'

type SignInFormData = {
	email: string
	password: string
}

const signInFormSchema = yup.object().shape({
	email: yup.string().required('Email obrigatório').email(),
	password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa de no mínimo 6 caracteres')
})

const SignIn: NextPage = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
		Router.push('/dashboard')
	}
 
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex as="form" width="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
				<Stack spacing="4">
					<Input label="Email" type="email" error={formState.errors.email} {...register('email')}/>
					<Input label="Senha" type="password" error={formState.errors.password} {...register('password')}/>
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
			</Flex>
		</Flex>
	)
}

export default SignIn
