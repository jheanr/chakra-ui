import { Image, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  icon: string;
  title: string;
}

export function TravelType({ icon, title }: TravelTypeProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  });

  return (
    <Flex align="center" justify="center" direction={["row", "column"]}>
      { isWideScreen ? (
        <Image src={`./icons/${icon}.svg`} alt={title} w={85} mb="6" />
      ) : (
        <Text fontSize="2xl" fontWeight="semibold" color="yellow.700" mr="2">
          •
        </Text>
      ) }

      <Text fontSize={["lg", "2xl"]} fontWeight={["medium", "semibold"]}>
        {title}
      </Text>
    </Flex>
  );
};
