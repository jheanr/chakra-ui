import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  });


  return (
    <Flex
      w="100%"
      h={["163px", "335px"]}
      backgroundImage="url('./banner.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p="4"
    >
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Box maxW={["100%", "33rem"]} color="white">
          <Heading as="h1" fontSize={["lg", "4xl"]} fontWeight="medium" mb={[2, 6]}>
            5 Continentes, <br/> infinitas possibilidades.
          </Heading>

          <Text fontSize={["sm", "xl"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>

        { isWideScreen && (
          <Image src="./airplane.svg" alt="Airplane image" transform="translateY(3.5rem)"/>
        ) }
      </Flex>
    </Flex>
  )
}