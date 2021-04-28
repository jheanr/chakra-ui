import { Box, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

interface ContinentCityProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function ContinentCity({ image, city, country, flag }: ContinentCityProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false
  });

  return (
    <Box
      w="256px"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="yellow.700"
      overflow="hidden"
      mx={["auto", "initial"]}
    >
      <Image
        src={`/europe/${image}`}
        alt="Londres"
        w="100%"
        h="173px"
        objectFit="cover" 
      />

      <Flex p="6" align="center" justify="space-between">
        <Box>
          <Heading
            as="h4"
            fontSize="xl"
            fontWeight="semibold"
          >
            {city}
          </Heading>

          <Heading
            as="h5"
            fontSize="md"
            fontWeight="normal"
            mt="3"
          >
            {country}
          </Heading>
        </Box>

        <Image src={`/europe/flags/${flag}`} alt={country} />
      </Flex>
    </Box>
  )
}