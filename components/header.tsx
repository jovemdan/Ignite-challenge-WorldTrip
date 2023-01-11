import { Box, Center, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Box as='header' w='100%' h='20'>
        <Center pt='27'>
          <Image src='/Logo.png' alt='logo' />
        </Center>
      </Box>
    </>
  )
}
