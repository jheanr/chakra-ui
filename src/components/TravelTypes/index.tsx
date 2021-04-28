import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

import { TravelType } from './TravelType';

export function TravelTypes() {
  return (
    <Grid
      w="100%"
      mt={["10", "24"]}
      maxW={1160}
      mx="auto"
      align="center"
      justify="center"
      gap={[1, 5]}
      templateColumns={["1fr 1fr", null, null, "repeat(5, 1fr)"]}
    >
      <GridItem>
        <TravelType icon="cocktail" title={'vida noturna'} />
      </GridItem>

      <GridItem>
        <TravelType icon="surf" title={'praia'} />
      </GridItem>

      <GridItem>      
        <TravelType icon="building" title={'moderno'} />
      </GridItem>

      <GridItem>
        <TravelType icon="museum" title={'clássico'} />
      </GridItem>

      <GridItem colSpan={[2, null, null, 1]}>
        <TravelType icon="earth" title={'e mais...'} />
      </GridItem>
    </Grid>
  );
}