import { ReactElement } from 'react';
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import SearchBar from '@/components/SearchBar';
import AdvancedSearch from '@/components/AdvancedSearch';
import AnimeCard from '@/components/AnimeCard';

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container maxWidth="container.xl" padding="24px">
      <Flex gap="24px">
        <AdvancedSearch />
        <Box flex="1">
          <SearchBar />
          <Box marginTop="24px">
            <Grid gap={6} templateColumns="repeat(4, 1fr)">
              <GridItem>
                <AnimeCard />
              </GridItem>
              <GridItem>
                <AnimeCard />
              </GridItem>
              <GridItem>
                <AnimeCard />
              </GridItem>
              <GridItem>
                <AnimeCard />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
