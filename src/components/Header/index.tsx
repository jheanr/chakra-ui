import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
  showBackButton?: Boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Flex as="header" w="100%" bg="white">
      <Flex
        w="100%"
        h={["12", "14", "16", "24"]}
        maxW={1160}
        mx="auto"
        align="center"
        justify="center"
        position="relative"
      >
        { showBackButton && (
          <Link href="/" passHref>
            <ChakraLink position="absolute" left={[4, null, null, 0]}>
              <Icon as={FiChevronLeft} fontSize={["md", "lg", "xl", "2xl"]} />
            </ChakraLink>
          </Link>
        ) }

        <Image src="./logo.svg" alt="World Trip logo" w={["81px", "96px", "120px", "auto"]}/>
      </Flex>
    </Flex>
  )
}