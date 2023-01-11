import { Center, Text } from '@chakra-ui/react'

export function ChooseContinentText() {
  return (
    <>
      <Center pt={['10', '40']}>
        <Text as='h1' color='gray.600' fontSize={['20px', '36px']}>
          Vamos nessa?
        </Text>
        <br />
      </Center>
      <Center>
        <Text as='h1' color='gray.600' fontSize={['20px', '36px']}>
          Então escolha seu continente
        </Text>
      </Center>
    </>
  )
}
