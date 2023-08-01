import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Container, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { IAnimeSearchParams } from '@/types/anime';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import SearchBar from '@/components/SearchBar';
import AdvancedSearch from '@/components/AdvancedSearch';
import AnimeCard from '@/components/AnimeCard';
import { useGetAnimeList } from '@/hooks/useAnime';
import useDebounce from '@/hooks/useDebounce';

const IndexPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [params, setParams] = useState<IAnimeSearchParams>({
    page: 1,
    limit: 12,
    q: '',
    type: null,
    rating: null,
    status: null,
    genres_exclude: '12',
  });

  const { data: dataAnime, isLoading: isLoadingAnime, error: errorAnime } = useGetAnimeList(useDebounce(params, 500));

  const handleQueryChange = (value: string) => {
    setParams({ ...params, page: 1, limit: 12, q: value });
  };

  const handleAnimeRatingChange = (value: string | null) => {
    setParams({ ...params, page: 1, limit: 12, q: params.q, rating: value, type: params.type, status: params.status });
  };

  const handleAnimeTypeChange = (value: string | null) => {
    setParams({
      ...params,
      page: 1,
      limit: 12,
      q: params.q,
      rating: params.rating,
      type: value,
      status: params.status,
    });
  };

  const handleAnimeStatusChange = (value: string | null) => {
    setParams({
      ...params,
      page: 1,
      limit: 12,
      q: params.q,
      rating: params.rating,
      type: params.type,
      status: value,
    });
  };

  const resetAllFilter = () => {
    setParams({
      ...params,
      page: 1,
      limit: 12,
      rating: null,
      type: null,
      status: null,
    });
  };

  const goToAnimeDetailPage = (animeId: number) => {
    router.push(`/anime/${animeId.toString()}`);
  };

  return (
    <Container maxWidth="container.xl" padding="24px">
      <Flex gap="24px">
        <AdvancedSearch
          animeRating={params.rating}
          animeStatus={params.status}
          animeType={params.type}
          onAnimeRatingChange={handleAnimeRatingChange}
          onAnimeStatusChange={handleAnimeStatusChange}
          onAnimeTypeChange={handleAnimeTypeChange}
          onClearAllFilter={resetAllFilter}
        />
        <Box flex="1">
          <SearchBar onQueryChange={handleQueryChange} searchQuery={params.q} />
          <Box marginTop="24px">
            {isLoadingAnime && !dataAnime ? (
              <Grid gap={6} templateColumns="repeat(4, 1fr)">
                {[...Array(4)].map((item, index) => (
                  <GridItem key={index}>
                    <AnimeCard anime={undefined} isLoading={isLoadingAnime} />
                  </GridItem>
                ))}
              </Grid>
            ) : dataAnime && dataAnime.data.length > 0 ? (
              <Grid gap={6} templateColumns="repeat(4, 1fr)">
                {dataAnime.data.map((item, index) => (
                  <GridItem key={index}>
                    <AnimeCard
                      anime={item}
                      isLoading={isLoadingAnime}
                      onClick={() => goToAnimeDetailPage(item.mal_id)}
                    />
                  </GridItem>
                ))}
              </Grid>
            ) : (
              <Center height="calc(100vh - 122px)" width="100%">
                <Flex alignContent="center" alignItems="center" direction="column">
                  <Heading size="sm">Result not found</Heading>
                  <Text fontSize="sm">Please try another keyword or search filter</Text>
                </Flex>
              </Center>
            )}
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
