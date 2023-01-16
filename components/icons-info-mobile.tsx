import { Box, Flex, Text } from '@chakra-ui/react'

export function IconsInfoMobile() {
  return (
    <Flex
      flexDirection='row'
      justifyContent='center'
      alignContent='center'
      margin='0 auto'
      flexWrap='wrap'
      pt='12'
      columnGap='12'
      rowGap='5'
      maxW='225'
    >
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        gap='2'
      >
        <Box
          rounded='full'
          bgColor='#FFBA08'
          w='8px'
          h='8px'
          position='relative'
        />
        <Text fontSize='18' color='gray.600' fontWeight='500' mt='-2px'>
          vida noturna
        </Text>
      </Flex>

      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        gap='2'
      >
        <Box
          rounded='full'
          bgColor='#FFBA08'
          w='8px'
          h='8px'
          position='relative'
        />
        <Text fontSize='18' color='gray.600' fontWeight='500'>
          praia
        </Text>
      </Flex>

      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        gap='2'
      >
        <Box
          rounded='full'
          bgColor='#FFBA08'
          w='8px'
          h='8px'
          position='relative'
        />
        <Text fontSize='18' color='gray.600' fontWeight='500'>
          moderno
        </Text>
      </Flex>

      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        gap='2'
      >
        <Box
          rounded='full'
          bgColor='#FFBA08'
          w='8px'
          h='8px'
          position='relative'
        />
        <Text fontSize='18' color='gray.600' fontWeight='500'>
          clássico
        </Text>
      </Flex>

      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        gap='2'
      >
        <Box
          rounded='full'
          bgColor='#FFBA08'
          w='8px'
          h='8px'
          position='relative'
        />
        <Text fontSize='18' color='gray.600' fontWeight='500'>
          e mais...
        </Text>
      </Flex>
    </Flex>
  )
}
