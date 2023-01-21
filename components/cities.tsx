import { Box, Flex, Text } from '@chakra-ui/react'

interface Cities {
  bgImage: string[]
}
export function Cities(props: Cities) {
  return (
    <Box mt='80px' fontSize='30px' fontWeight='500' lineHeight='54px'>
      <Text color='#47585B'>Cidades +100</Text>
      <Flex gap='30px' flexWrap='wrap' mt='40px'>
        <Flex flexDirection='column'>
          <Box
            w='250px'
            h='173px'
            borderRadius='4px 4px 0px 0px'
            bgSize='cover'
            bgRepeat='no-repeat'
            bgImage={props.bgImage}
          ></Box>
          <Box
            w='250px'
            h='106px'
            bgColor='white'
            borderRadius='0px 0px 4px 4px'
          ></Box>
        </Flex>

        <Flex flexDirection='column'>
          <Box
            w='250px'
            h='173px'
            bgSize='cover'
            bgRepeat='no-repeat'
            bgImage={props.bgImage}
            borderRadius='4px 4px 0px 0px'
          ></Box>
          <Box
            w='250px'
            h='106px'
            bgColor='white'
            borderRadius='0px 0px 4px 4px'
          ></Box>
        </Flex>
        <Flex flexDirection='column'>
          <Box
            w='250px'
            h='173px'
            bgSize='cover'
            bgRepeat='no-repeat'
            bgImage={props.bgImage}
            borderRadius='4px 4px 0px 0px'
          ></Box>
          <Box
            w='250px'
            h='106px'
            bgColor='white'
            borderRadius='0px 0px 4px 4px'
          ></Box>
        </Flex>
        <Flex flexDirection='column'>
          <Box
            w='250px'
            h='173px'
            bgSize='cover'
            bgRepeat='no-repeat'
            bgImage={props.bgImage}
            borderRadius='4px 4px 0px 0px'
          ></Box>
          <Box
            w='250px'
            h='106px'
            bgColor='white'
            borderRadius='0px 0px 4px 4px'
          ></Box>
        </Flex>
        <Flex flexDirection='column'>
          <Box
            w='250px'
            h='173px'
            bgSize='cover'
            bgRepeat='no-repeat'
            bgImage={props.bgImage}
            borderRadius='4px 4px 0px 0px'
          ></Box>
          <Box
            w='250px'
            h='106px'
            bgColor='white'
            borderRadius='0px 0px 4px 4px'
          ></Box>
        </Flex>
      </Flex>
    </Box>
  )
}
