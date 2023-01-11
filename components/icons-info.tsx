import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function IconsInfo() {
  return (
    <>
      <Flex maxW='1160px' margin='0 auto' gap='36' pt='10'>
        <Box>
          <Image src='/svgs/cocktail.svg' alt='airplane' />
          <Text pt='2' textAlign='center' color='gray.600' fontWeight='bold'>
            vida noturna
          </Text>
        </Box>
        <Box>
          <Image src='/svgs/surf.svg' alt='airplane' />
          <Text pt='2' textAlign='center' color='gray.600' fontWeight='bold'>
            praia
          </Text>
        </Box>
        <Box>
          <Image src='/svgs/building.svg' alt='airplane' />
          <Text pt='2' textAlign='center' color='gray.600' fontWeight='bold'>
            moderno
          </Text>
        </Box>
        <Box>
          <Image src='/svgs/museum.svg' alt='airplane' />
          <Text pt='2' textAlign='center' color='gray.600' fontWeight='bold'>
            clássico
          </Text>
        </Box>
        <Box>
          <Image src='/svgs/earth.svg' alt='airplane' />
          <Text pt='2' textAlign='center' color='gray.600' fontWeight='bold'>
            e mais...
          </Text>
        </Box>
      </Flex>
    </>
  )
}
