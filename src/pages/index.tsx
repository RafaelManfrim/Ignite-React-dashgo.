import type { NextPage } from 'next'
import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

const Home: NextPage = () => {
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex as="form" width="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column">
				<Stack spacing="4">
					<FormControl>
						<FormLabel htmlFor="email">Email: </FormLabel>
						<Input id="email" name="email" type="email" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900'}} size="lg" />
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="password">Senha: </FormLabel>
						<Input id="password" name="password" type="password" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900'}} size="lg" />
					</FormControl>
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
			</Flex>
		</Flex>
	)
}

export default Home
