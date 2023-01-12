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
import { BannerSlider } from '../components/banner-slider'
import { ChooseContinentText } from '../components/chooseContinentText'
import { Header } from '../components/header'
import { IconsInfo } from '../components/icons-info'

export default function Home() {
  return (
    <>
      <Header />
      <Box minHeight='1440px'>
        <Banner />
        <IconsInfo />
        <ChooseContinentText />

        <BannerSlider />
      </Box>
    </>
  )
}
