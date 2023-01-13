import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  return (
    <>
      <Box as='header' w='100%' h='20'>
        <Flex pt={['6', '6', '4']} justify='center' alignItems='center'>
          {router.pathname !== '/' && (
            <Link href='/'>
              <ChevronLeftIcon
                style={{ cursor: 'pointer', position: 'absolute', left: 40 }}
                w={8}
                h={8}
              />
            </Link>
          )}
          <Image h={['30', '30', '45']} src='/Logo.png' alt='logo' />
        </Flex>
      </Box>
    </>
  )
}
