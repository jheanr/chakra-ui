import { Flex, Heading } from "@chakra-ui/react";

export function CallToAction() {
  return (
    <Flex
      w="100%"
      maxW={1160}
      align="center"
      justify="center"
      mx="auto"
    >
      <Heading
        fontSize={["xl", null, "2xl", "4xl"]}
        fontWeight="medium"
        lineHeight="tall"
        textAlign="center"
      >
        Vamos nessa? <br/>
        Então escolha seu continente
      </Heading>
    </Flex>
  )
}