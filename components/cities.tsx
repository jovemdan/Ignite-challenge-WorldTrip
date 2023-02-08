import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react'

interface Cities {
  bgImage: string[]
}
export function Cities(props: Cities) {
  return (
    <Flex flexDirection='column' w={['256px', '250px']}>
      <Box
        w='100%'
        h='173px'
        borderRadius='4px 4px 0px 0px'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgImage={props.bgImage}
      ></Box>
      <Box w='100%' h='106px' bgColor='white' borderRadius='0px 0px 4px 4px'>
        <Flex flexDirection='column' marginInline='24px' mt='18px'>
          <Flex justifyContent='space-between'>
            <Flex flexDirection='column' gap='12px'>
              <Text
                fontSize='20px'
                lineHeight='25px'
                fontWeight='600'
                color='#47585B'
              >
                Londres
              </Text>
              <Text
                fontSize='16px'
                lineHeight='25px'
                fontWeight='500'
                color='#999999'
              >
                Reino Unido
              </Text>
            </Flex>

            <Avatar w='30px' h='30px' mt='15px'></Avatar>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
