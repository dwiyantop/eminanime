import { Box, Flex, Image, Skeleton, Text, VStack } from '@chakra-ui/react';
import { IAnime } from '@/types/anime';

const AnimeCard = ({ isLoading, anime }: { isLoading: boolean; anime?: IAnime }) => {
  if (isLoading) {
    return (
      <Skeleton borderRadius="8px">
        <VStack
          alignItems="flex-start"
          background="white"
          borderRadius="8px"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          gap="0px"
          overflow="hidden"
        >
          <Image alt="Anime Poster" src="https://cdn.myanimelist.net/images/anime/4/19644l.jpg" />
          <Flex alignContent="space-between" alignItems="center" padding="12px" width="100%">
            <Box flex="1">
              <Text fontSize="md" fontWeight="bold">
                Title
              </Text>
              <Text fontSize="xs">24 Eps / Action / 2023</Text>
            </Box>
            <Text fontSize="md" fontWeight="bold">
              4.8
            </Text>
          </Flex>
        </VStack>
      </Skeleton>
    );
  }

  if (!isLoading && anime) {
    return (
      <VStack
        alignItems="flex-start"
        background="white"
        borderRadius="8px"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
        gap="0px"
        overflow="hidden"
      >
        <Image alt="Anime Poster" src="https://cdn.myanimelist.net/images/anime/4/19644l.jpg" />
        <Box padding="12px" width="100%">
          <Flex alignContent="space-between" alignItems="center" width="100%">
            <Box flex="1">
              <Text fontSize="sm" fontWeight="bold" noOfLines={1}>
                {anime.title}
              </Text>
            </Box>
            <Text fontSize="md" fontWeight="bold">
              {anime.score}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="xs" noOfLines={1}>
              {anime?.genres.map((item, index) => {
                return index < anime.genres.length - 1 ? `${item.name} / ` : item.name;
              })}
            </Text>
            <Text fontSize="xs">{anime.episodes || '1'} Eps</Text>
          </Flex>
        </Box>
      </VStack>
    );
  }

  return null;
};

export default AnimeCard;
