import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function BannerContinent() {
  return (
    <Flex
      w="100%"
      h={["150px", "250", "350", "500px"]}
      backgroundImage="url('./banner-continent.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        align={["center", null, null, "flex-end"]}
        justify={["center", null, null, "flex-start"]}
        p="4"
      >
        <Heading
          as="h1"
          fontSize={["2xl","5xl"]}
          fontWeight="semibold"
          color="white"
          mb={[0, "10"]}
          textShadow="0 1px 10px rgba(0,0,0,0.7)"
        >
          Europa
        </Heading>
      </Flex>
    </Flex>
  )
}