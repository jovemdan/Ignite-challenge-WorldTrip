import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function IconsInfo() {
  return (
    <>
      <Flex
        maxW='1160px'
        justifyContent='center'
        alignItems='center'
        margin='0 auto'
        gap={['3', '8', '10', '10', '36']}
        pt={['12', '20', '10', '10', '24']}
      >
        <Box>
          <Image
            h={['5', '12', '50', '85']}
            src='/svgs/cocktail.svg'
            alt='cocktail'
          />
          <Text
            fontSize={['8', '10', '12', '14', '16']}
            pt='2'
            textAlign='center'
            color='gray.600'
            fontWeight='bold'
          >
            vida noturna
          </Text>
        </Box>
        <Box>
          <Image h={['5', '12', '50', '85']} src='/svgs/surf.svg' alt='surf' />
          <Text
            fontSize={['8', '10', '12', '14', '16']}
            pt='2'
            textAlign='center'
            color='gray.600'
            fontWeight='bold'
          >
            praia
          </Text>
        </Box>
        <Box>
          <Image
            h={['5', '12', '50', '85']}
            src='/svgs/building.svg'
            alt='building'
          />
          <Text
            fontSize={['8', '10', '12', '14', '16']}
            pt='2'
            textAlign='center'
            color='gray.600'
            fontWeight='bold'
          >
            moderno
          </Text>
        </Box>
        <Box>
          <Image
            h={['5', '12', '50', '85']}
            src='/svgs/museum.svg'
            alt='museum'
          />
          <Text
            fontSize={['8', '10', '12', '14', '16']}
            pt='2'
            textAlign='center'
            color='gray.600'
            fontWeight='bold'
          >
            clássico
          </Text>
        </Box>
        <Box>
          <Image
            h={['5', '12', '50', '85']}
            src='/svgs/earth.svg'
            alt='earth'
          />
          <Text
            pt='2'
            fontSize={['8', '10', '12', '14', '16']}
            textAlign='center'
            color='gray.600'
            fontWeight='bold'
          >
            e mais...
          </Text>
        </Box>
      </Flex>
    </>
  )
}
