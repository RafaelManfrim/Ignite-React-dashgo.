import { Input } from '../components/Form/Input'

import type { NextPage } from 'next'
import { Flex, Button, Stack } from '@chakra-ui/react'

const SignIn: NextPage = () => {
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex as="form" width="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column">
				<Stack spacing="4">
					<Input name="email" label="Email" type="email"/>
					<Input name="password" label="Password" type="password"/>
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
			</Flex>
		</Flex>
	)
}

export default SignIn
