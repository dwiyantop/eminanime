import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, Flex, Heading, HStack, Image, Skeleton, Spacer, Text, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useGetAnimeDetail } from '@/hooks/useAnime';

const AnimeDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const animeId = router.query.id as string | undefined;

  const {
    data: dataAnimeDetail,
    isLoading: isLoadingAnimeDetail,
    error: errorAnimeDetail,
  } = useGetAnimeDetail(animeId as string, animeId !== undefined);

  const backToSearchAnime = () => {
    router.push('/');
  };

  return (
    <Container maxWidth="container.xl" padding="24px">
      <Button
        colorScheme="teal"
        leftIcon={<ChevronLeftIcon />}
        onClick={() => backToSearchAnime()}
        size="sm"
        variant="outline"
      >
        Back to Search Anime
      </Button>
      <Flex direction="row" gap="24px" marginTop="24px">
        <Box aspectRatio="auto 2/3" borderRadius="8px" overflow="hidden" position="relative" width="500px">
          {isLoadingAnimeDetail ? (
            <Skeleton height="100%" width="100%" />
          ) : (
            <Image
              alt="Anime Poster"
              height="100%"
              objectFit="cover"
              position="absolute"
              src="https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
              top="0"
              width="100%"
            />
          )}
        </Box>
        <Box width="100%">
          <VStack alignItems="flex-start" gap="0px">
            <HStack alignItems="center" width="100%">
              <Heading fontWeight="extrabold" size="lg">
                {isLoadingAnimeDetail ? (
                  <Skeleton as="span">Anime Title Goes Here</Skeleton>
                ) : (
                  dataAnimeDetail?.data.title
                )}
              </Heading>
              <Spacer />
              <Text fontSize="lg" fontWeight="extrabold">
                {isLoadingAnimeDetail ? <Skeleton as="span">0</Skeleton> : dataAnimeDetail?.data.score}
              </Text>
            </HStack>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold" marginTop="8px" noOfLines={1}>
              {isLoadingAnimeDetail ? (
                <Skeleton as="span">Category / Anime / Here</Skeleton>
              ) : (
                dataAnimeDetail?.data.genres.map((item, index) => {
                  return index < dataAnimeDetail.data.genres.length - 1 ? `${item.name} / ` : item.name;
                })
              )}
            </Text>
            <VStack alignItems="flex-start" marginTop="16px">
              <Heading fontWeight="extrabold" size="xs">
                SYNOPSIS
              </Heading>
              <Text>
                {isLoadingAnimeDetail ? (
                  <Skeleton as="span">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a consequuntur consequatur libero
                    repellendus accusamus nemo sequi, cumque at natus ipsa debitis, eveniet distinctio! Doloremque,
                    blanditiis. Natus officia perspiciatis commodi!
                  </Skeleton>
                ) : (
                  dataAnimeDetail?.data.synopsis
                )}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

AnimeDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default AnimeDetailPage;
