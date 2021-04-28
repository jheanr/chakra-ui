import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";


import { BannerContinent } from "../components/BannerContinent";
import { ContinentCity } from "../components/ContinentCity";
import { ContinentInfoItem } from "../components/ContinentInfoItem";
import { Header } from "../components/Header";


export default function Continent() {
  return (
    <Flex direction="column">
      <Head>
        <title>Europa | World Trip</title>
      </Head>

      <Header showBackButton />

      <BannerContinent />

      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        p="4"
        align="center"
        justify="space-between"
        direction={["column", null, null, "row"]}
      >
        <Box maxW={["100%", null, null, 600]} mt={["2", null, null, "20"]}>
          <Text
            lineHeight={["5",
            "9"]}
            fontSize={["sm",
            "xl"]}
            textAlign={["justify", null, "center", "justify"]}
          >
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente 
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, 
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>

        <SimpleGrid columns={3} spacing={[3, 4, 10]} mt={["4", null, "6", "0"]}>
          <ContinentInfoItem number="50" description="países" />
          <ContinentInfoItem number="60" description="línguas" />
          <ContinentInfoItem number="27" description="cidades +100" hasToolTip />
        </SimpleGrid>
      </Flex>

      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        mt={["0", "20"]}
        mb={["6", "10"]}
        p="4"
        direction="column"
      >
        <Heading fontSize={["2xl", "4xl"]} fontWeight="medium">
          Cidades +100
        </Heading>

        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={[6, 10]} mt={["6", "10"]}>
            <ContinentCity
              image="london.jfif"
              city="Londres"
              country="Reino Unido"
              flag="uk.png" 
            />

            <ContinentCity
              image="paris.jfif"
              city="Paris"
              country="França"
              flag="france.png" 
            />

            <ContinentCity
              image="rome.jfif"
              city="Roma"
              country="Itália"
              flag="italy.png" 
            />
            
            <ContinentCity
              image="praga.jfif"
              city="Praga"
              country="República Tcheca"
              flag="czech.png" 
            />

            <ContinentCity
              image="amsterdam.jfif"
              city="Amsterdã"
              country="Holanda"
              flag="netherlands.png" 
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}
