import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface Props extends InputProps {
  name: string
  label?: string
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && (
        <FormLabel id={`label-${name}`} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputComponent)
