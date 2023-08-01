import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

const AnimeCard = () => {
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
  );
};

export default AnimeCard;
