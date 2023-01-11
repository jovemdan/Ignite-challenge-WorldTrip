import {
  Image,
  Box,
  Center,
  Text,
  Flex,
  Spacer,
  HStack,
} from '@chakra-ui/react'
import { Banner } from '../components/banner'
import { ChooseContinentText } from '../components/chooseContinentText'
import { Header } from '../components/header'
import { IconsInfo } from '../components/icons-info'

export default function Home() {
  return (
    <>
      <Header />

      <Box
        mt='27'
        backgroundImage='/Background.png'
        bgRepeat='no-repeat'
        backgroundSize='100% auto'
        h={['163px', '335px']}
      >
        <Banner />
        <IconsInfo />

        <ChooseContinentText />
      </Box>
    </>
  )
}
