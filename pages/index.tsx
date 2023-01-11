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
      <Box>
        <Header />

        <Banner />
        <IconsInfo />
        <ChooseContinentText />
      </Box>
    </>
  )
}
