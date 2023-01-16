import { Box, Text, StyleProps, Flex } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Header } from '../components/header'

type ContinentProps = {
  selectedContinent: {
    name: string
    description: string
    countriesCount: number
    languagesCount: number
    citiesCount: number
    bgImage: string
    cities: Array<{
      name: string
      country: string
      flag: string
      image: string
    }>
  }
}

export default function Continent({ selectedContinent }: ContinentProps) {
  return (
    <>
      <Header />

      <Box as='main'>
        <Box
          bgImage={selectedContinent.bgImage}
          bgSize='cover'
          bgRepeat='no-repeat'
          bgColor='black'
          w='100%'
          h={['150px', '500px']}
        >
          <Container
            height='100%'
            paddingTop={['0px', '370px']}
            paddingX='16px'
            display={['flex', 'block']}
            justifyContent='center'
            alignItems='center'
          >
            <Text
              fontSize={[28, 48]}
              fontWeight={600}
              lineHeight={['42px', '72px']}
              color='gray.50'
            >
              {selectedContinent.name}
            </Text>
          </Container>
        </Box>

        <Container maxW='1160px' paddingX='16px' mb='35px'>
          <Flex justifyContent='space-between'>
            <Box maxW='600px' pt='12'>
              <Text
                as='p'
                color='gray.600'
                fontWeight='400'
                lineHeight='36px'
                fontSize='24px'
                textAlign='justify'
              >
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
              </Text>
            </Box>

            <Flex gap='42px' alignItems='center'>
              <Box>
                <Text
                  fontSize='48px'
                  lineHeight='72px'
                  fontWeight='600'
                  color='#FFBA08'
                  textAlign='center'
                >
                  50
                </Text>
                <Text fontWeight='600' color='#47585B' fontSize='24px'>
                  países
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize='48px'
                  lineHeight='72px'
                  fontWeight='600'
                  color='#FFBA08'
                  textAlign='center'
                >
                  60
                </Text>
                <Text fontWeight='600' color='#47585B' fontSize='24px'>
                  línguas
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize='48px'
                  lineHeight='72px'
                  fontWeight='600'
                  color='#FFBA08'
                  textAlign='center'
                >
                  27
                </Text>
                <Text fontWeight='600' color='#47585B' fontSize='24px'>
                  cidades + 10
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

interface ContainerProps extends StyleProps {
  children: React.ReactNode
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box width='100%' maxW='1160px' margin='0 auto' {...props}>
      {children}
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continent: 'europa' } },
      { params: { continent: 'america-do-norte' } },
      { params: { continent: 'america-do-sul' } },
      { params: { continent: 'oceania' } },
      { params: { continent: 'asia' } },
      { params: { continent: 'africa' } },
    ],
    fallback: false,
  }
}

type Props = {
  selectedContinent: ContinentProps
}
interface IParams extends ParsedUrlQuery {
  continent: string
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { continent } = context.params as IParams
  const data = [
    {
      name: 'Europa',
      slug: 'europa',
      bgImage: '/europeDetails.png',
      description:
        'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      countriesCount: 50,
      languagesCount: 60,
      citiesCount: 98,
      cities: [
        {
          name: 'Londres',
          country: 'Reino Unido',
          image:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
        },
        {
          name: 'Londres',
          country: 'Reino Unido',
          image:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
        },
        {
          name: 'Londres',
          country: 'Reino Unido',
          image:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
        },
        {
          name: 'Londres',
          country: 'Reino Unido',
          image:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
        },
        {
          name: 'Londres',
          country: 'Reino Unido',
          image:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
        },
      ],
    },
  ]

  const selectedContinent = data.find((m) => m.slug === continent)
  return {
    props: {
      selectedContinent,
    },
  }
}
