import { Input as ChakraInput, FormLabel, FormControl, InputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction as ForwardRefFunc } from 'react'

interface InputBaseProps extends InputProps {
    name: string;
    label?: string;
} 

const InputBase: ForwardRefFunc<HTMLInputElement, InputBaseProps> = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput id={name} name={name} focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900'}} size="lg" ref={ref} {...rest}/>
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)