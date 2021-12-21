import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/react'

interface Props extends InputProps {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
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
