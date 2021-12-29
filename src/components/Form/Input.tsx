import { Input as ChakraInput, FormLabel, FormControl, InputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction as ForwardRefFunc } from 'react'
import { FieldError } from 'react-hook-form'

interface InputBaseProps extends InputProps {
    name: string;
    label?: string;
    error?: FieldError
} 

const InputBase: ForwardRefFunc<HTMLInputElement, InputBaseProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput id={name} name={name} focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900'}} size="lg" ref={ref} {...rest}/>
            { !!error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)