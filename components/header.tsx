import { Box, Center, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Box as='header' w='100%' h='20'>
        <Center pt={['6', '6', '4']}>
          <Image h={['30', '30', '45']} src='/Logo.png' alt='logo' />
        </Center>
      </Box>
    </>
  )
}
