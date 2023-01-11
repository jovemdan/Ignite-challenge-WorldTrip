import { Box, Flex, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <>
      <Flex
        maxW='1160px'
        alignContent='center'
        alignItems='center'
        margin='0 auto'
        gap='32'
      >
        <Box>
          <Flex
            h='100%'
            flexDirection='column'
            justifyContent='center'
            paddingX={['16px', '0px']}
          >
            <Text fontSize='36' color='gray.50' fontFamily='Poppins'>
              5 Continentes,
              <br /> infinitas possibilidades.
            </Text>
            <Text
              fontSize='20'
              color='#DADADA'
              fontWeight='400'
              fontFamily='Poppins'
              pt='5'
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
        </Box>
        <Image src='/svgs/Airplane.svg' alt='airplane' h='355px' mt='20px' />
      </Flex>
    </>
  )
}
