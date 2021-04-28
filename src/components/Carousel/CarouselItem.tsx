import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  title: string;
  description: string;
  image: string;
}

export function CarouselItem({ title, description, image }: CarouselItemProps) {
  return (
    <Flex
      w="1240"
      h={["250px", "450px"]}
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('./continent/${image}')`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Heading
        fontSize={["2xl", "5xl"]}
        fontWeight="bold"
        color="white"
        textShadow="0 1px 10px rgba(0,0,0,0.7)"
        mt={["8", 0]}
      >
        <Link href="/continent">
          <ChakraLink _hover={{ color: "yellow.700" }}>
            {title}
          </ChakraLink>
        </Link>
      </Heading>

      <Heading
        fontSize={["sm", "2xl"]}
        fontWeight="bold"
        mt={["4", "6"]}
        color="white"
        textShadow="0 1px 10px rgba(0,0,0,0.7)"
        textAlign="center"
      >
        {description}
      </Heading>
    </Flex>
  )
}