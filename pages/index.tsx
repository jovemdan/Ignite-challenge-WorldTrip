import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Banner } from '../components/banner'
import { BannerSlider } from '../components/banner-slider'
import { ChooseContinentText } from '../components/chooseContinentText'
import { Header } from '../components/header'
import { IconsInfo } from '../components/icons-info'
import { IconsInfoMobile } from '../components/icons-info-mobile'

export default function Home() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })
  return (
    <>
      <Header />
      <Box height={['900px', '1200px', '1469px']}>
        <Banner />
        {isMobileVersion ? <IconsInfoMobile /> : <IconsInfo />}
        <ChooseContinentText />
        <BannerSlider />
      </Box>
    </>
  )
}
