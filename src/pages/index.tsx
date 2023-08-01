import { ReactElement, useState } from 'react';
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import { IAnimeSearchParams } from '@/types/anime';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import SearchBar from '@/components/SearchBar';
import AdvancedSearch from '@/components/AdvancedSearch';
import AnimeCard from '@/components/AnimeCard';
import { useGetAnimeList } from '@/hooks/useAnime';
import useDebounce from '@/hooks/useDebounce';

const IndexPage: NextPageWithLayout = () => {
  const [params, setParams] = useState<IAnimeSearchParams>({
    page: 1,
    limit: 12,
    q: '',
  });
  const { data: dataAnime, isLoading: isLoadingAnime, error: errorAnime } = useGetAnimeList(useDebounce(params, 500));

  return (
    <Container maxWidth="container.xl" padding="24px">
      <Flex gap="24px">
        <AdvancedSearch />
        <Box flex="1">
          <SearchBar />
          <Box marginTop="24px">
            <Grid gap={6} templateColumns="repeat(4, 1fr)">
              {isLoadingAnime && !dataAnime
                ? [...Array(4)].map((item, index) => (
                    <GridItem key={index}>
                      <AnimeCard anime={undefined} isLoading={isLoadingAnime} />
                    </GridItem>
                  ))
                : dataAnime?.data.map((item, index) => (
                    <GridItem key={index}>
                      <AnimeCard anime={item} isLoading={isLoadingAnime} />
                    </GridItem>
                  ))}
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
