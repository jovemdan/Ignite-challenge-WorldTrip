import { Box, Flex, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box
      backgroundImage='/Background.png'
      bgRepeat='no-repeat'
      backgroundSize='cover'
      w='100%'
      h={['163px', '335px']}
    >
      <Flex
        w='100%'
        h='100%'
        maxW='1160px'
        margin='0 auto'
        gap='32'
        justifyContent='space-between'
        alignContent='center'
      >
        <Flex
          h='100%'
          flexDirection='column'
          justifyContent='center'
          paddingX={['16px', '16px', '16px', '16px', '0px']}
        >
          <Text
            as='h1'
            fontSize={['20', '36']}
            lineHeight={['30px', '54px']}
            color='gray.50'
            fontFamily='Poppins'
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text
            as='h2'
            color='#DADADA'
            fontWeight={'400'}
            fontSize={['14', '20']}
            lineHeight={['21px', '30px']}
            fontFamily='Poppins'
            pt={['1', '1', '1', '5']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          src='/svgs/Airplane.svg'
          alt='airplane'
          h={{ sm: '200', md: '240', lg: '300px', xl: '355px' }}
          mt='20px'
          display={['none', 'none', 'block']}
        />
      </Flex>
    </Box>
  )
}
