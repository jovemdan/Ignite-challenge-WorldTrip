import {
  Image,
  Box,
  Center,
  Text,
  Flex,
  Spacer,
  HStack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box as='header' w='100%' h='20'>
        <Center pt='27'>
          <Image src='/Logo.png' alt='logo' />
        </Center>
      </Box>

      <Box
        mt='27'
        backgroundImage='/Background.png'
        bgRepeat='no-repeat'
        backgroundSize='100% auto'
        h={['163px', '335px']}
      >
        <Flex
          maxW='1160px'
          // justifyContent='space-between'
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
          <Image src='/Airplane.svg' alt='airplane' h='355px' mt='20px' />
        </Flex>
      </Box>
    </>
  )
}
