import { Heading, Icon, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi';

interface ContinentInfoItemProps {
  number: string;
  description: string;
  hasToolTip?: boolean;
}

export function ContinentInfoItem({ 
  number, 
  description, 
  hasToolTip = false 
}: ContinentInfoItemProps) {
  return (
    <Stack spacing="0" align={["flex-start", "center"]}>
      <Heading fontSize={["2xl", "5xl"]} fontWeight="semibold" color="yellow.700">
        {number}
      </Heading>

      <Heading fontSize={["sm", "md", "xl"]} fontWeight={["normal", "semibold"]}>
        {description}
        { hasToolTip && (
          <Tooltip label="Entre as 100 cidades mais visitadas do mundo" placement="top">
            <Text as="span" marginLeft="1">
              <Icon as={FiInfo} color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
            </Text>
          </Tooltip>
        ) }
      </Heading>
    </Stack>
  )
}