import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

type SignInFormData = {
	email: string
	password: string
}

const SignIn: NextPage = () => {
	const { register, handleSubmit, formState } = useForm()

	const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
		console.log(data)
	}
 
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex as="form" width="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
				<Stack spacing="4">
					<Input label="Email" type="email" {...register('email')}/>
					<Input label="Password" type="password" {...register('password')}/>
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
			</Flex>
		</Flex>
	)
}

export default SignIn
