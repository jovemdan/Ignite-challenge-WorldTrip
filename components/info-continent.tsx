import { Box, Flex, Text } from '@chakra-ui/react'

interface InfoContinentProps {
  countryCount: number
  languagesCount: number
  citiesCount: number
}

export function InfoContinent({
  countryCount,
  languagesCount,
  citiesCount,
}: InfoContinentProps) {
  return (
    <>
      <Flex gap={['15px', '30px']} mt='16px' alignItems='center'>
        <Box>
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            fontWeight='600'
            color='#FFBA08'
            textAlign='center'
          >
            {countryCount}
          </Text>
          <Text
            fontWeight={['400', '600']}
            color='#47585B'
            fontSize={['14px', '24px']}
          >
            países
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            fontWeight='600'
            color='#FFBA08'
            textAlign='center'
          >
            {languagesCount}
          </Text>
          <Text
            fontWeight={['400', '600']}
            color='#47585B'
            fontSize={['14px', '24px']}
          >
            línguas
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            fontWeight='600'
            color='#FFBA08'
            textAlign='center'
          >
            {citiesCount}
          </Text>
          <Text
            fontWeight={['400', '600']}
            color='#47585B'
            fontSize={['14px', '24px']}
          >
            cidades + 10
          </Text>
        </Box>
      </Flex>
    </>
  )
}
