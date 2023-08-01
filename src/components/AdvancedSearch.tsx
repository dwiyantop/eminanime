import { useState } from 'react';
import { Box, Button, Checkbox, Flex, FormLabel, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { ANIME_RATING, ANIME_STATUS, ANIME_TYPES } from '@/constants';

const AdvanceSearch = ({
  animeType,
  animeRating,
  animeStatus,
  onAnimeRatingChange,
  onAnimeTypeChange,
  onAnimeStatusChange,
  onClearAllFilter,
}: {
  animeType: string | null;
  animeRating: string | null;
  animeStatus: string | null;
  onAnimeRatingChange: (value: string | null) => void;
  onAnimeTypeChange: (value: string | null) => void;
  onAnimeStatusChange: (value: string | null) => void;
  onClearAllFilter: () => void;
}) => {
  const availableAnimeType = ANIME_TYPES;
  const availableAnimeRating = ANIME_RATING;
  const availableAnimeStatus = ANIME_STATUS;
  const [selectedAnimeType, setSelectedAnimeType] = useState<string | null>(animeType);
  const [selectedAnimeRating, setSelectedAnimeRating] = useState<string | null>(animeRating);
  const [selectedAnimeStatus, setSelectedAnimeStatus] = useState<string | null>(animeStatus);

  const handleOnFilterAnimeTypeChange = (value: string) => {
    setSelectedAnimeType(value);
    onAnimeTypeChange(value);
  };

  const handleOnFilterAnimeRatingChange = (value: string) => {
    setSelectedAnimeRating(value);
    onAnimeRatingChange(value);
  };

  const handleOnFilterAnimeStatusChange = (value: string) => {
    setSelectedAnimeStatus(value);
    onAnimeStatusChange(value);
  };

  const handleOnClearAllFilter = () => {
    setSelectedAnimeType(null);
    setSelectedAnimeRating(null);
    setSelectedAnimeStatus(null);
    onClearAllFilter();
  };

  return (
    <Box>
      <VStack borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" gap="0" position="sticky" width="280px">
        <Flex alignItems="center" borderBottom="1px solid" borderColor="gray.200" padding="16px" width="100%">
          <Heading size="xs">Advanced Search</Heading>
          <Spacer />
          <Button colorScheme="teal" onClick={handleOnClearAllFilter} size="xs" variant="link">
            Clear All
          </Button>
        </Flex>
        <Flex borderBottom="1px solid" borderColor="gray.200" direction="column" padding="16px" width="100%">
          <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
            Type
          </Text>
          <Flex flexWrap="wrap">
            {availableAnimeType.map((option, index) => (
              <FormLabel
                background={selectedAnimeType === option.value ? 'green.500' : 'gray.100'}
                borderRadius="8px"
                key={index}
                paddingX="12px"
                paddingY="4px"
              >
                <Checkbox
                  _focus={{ outline: 'none' }}
                  _hover={{ cursor: 'pointer' }}
                  backgroundColor={selectedAnimeType === option.value ? 'green.500' : 'gray.100'}
                  borderRadius="full"
                  display="none"
                  isChecked={selectedAnimeType === option.value}
                  mb="2"
                  mr="2"
                  onChange={() => handleOnFilterAnimeTypeChange(option.value)}
                  px="8px"
                  py="2px"
                  size="sm"
                ></Checkbox>
                <Text color={selectedAnimeType === option.value ? 'white' : 'gray.700'} fontSize="xs">
                  {option.label}
                </Text>
              </FormLabel>
            ))}
          </Flex>
        </Flex>
        <Flex borderBottom="1px solid" borderColor="gray.200" direction="column" padding="16px" width="100%">
          <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
            Rating
          </Text>
          <Flex flexWrap="wrap">
            {availableAnimeRating.map((option, index) => (
              <FormLabel
                background={selectedAnimeRating === option.value ? 'green.500' : 'gray.100'}
                borderRadius="8px"
                key={index}
                paddingX="12px"
                paddingY="4px"
              >
                <Checkbox
                  _focus={{ outline: 'none' }}
                  _hover={{ cursor: 'pointer' }}
                  backgroundColor={selectedAnimeRating === option.value ? 'green.500' : 'gray.100'}
                  borderRadius="full"
                  display="none"
                  isChecked={selectedAnimeRating === option.value}
                  mb="2"
                  mr="2"
                  onChange={() => handleOnFilterAnimeRatingChange(option.value)}
                  px="8px"
                  py="2px"
                  size="sm"
                ></Checkbox>
                <Text color={selectedAnimeRating === option.value ? 'white' : 'gray.700'} fontSize="xs">
                  {option.label}
                </Text>
              </FormLabel>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" padding="16px" width="100%">
          <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
            Status
          </Text>
          <Flex flexWrap="wrap">
            {availableAnimeStatus.map((option, index) => (
              <FormLabel
                background={selectedAnimeStatus === option.value ? 'green.500' : 'gray.100'}
                borderRadius="8px"
                key={index}
                paddingX="12px"
                paddingY="4px"
              >
                <Checkbox
                  _focus={{ outline: 'none' }}
                  _hover={{ cursor: 'pointer' }}
                  backgroundColor={selectedAnimeStatus === option.value ? 'green.500' : 'gray.100'}
                  borderRadius="full"
                  display="none"
                  isChecked={selectedAnimeStatus === option.value}
                  mb="2"
                  mr="2"
                  onChange={() => handleOnFilterAnimeStatusChange(option.value)}
                  px="8px"
                  py="2px"
                  size="sm"
                ></Checkbox>
                <Text color={selectedAnimeStatus === option.value ? 'white' : 'gray.700'} fontSize="xs">
                  {option.label}
                </Text>
              </FormLabel>
            ))}
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};

export default AdvanceSearch;
