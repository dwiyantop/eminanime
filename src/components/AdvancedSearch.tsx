import { useState } from 'react';
import { Box, Button, Checkbox, CheckboxGroup, Flex, FormLabel, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { ANIME_RATING, ANIME_STATUS, ANIME_TYPES } from '@/constants';

const AdvanceSearch = () => {
  const availableAnimeType = ANIME_TYPES;
  const availableAnimeRating = ANIME_RATING;
  const availableAnimeStatus = ANIME_STATUS;
  const [selectedAnimeType, setSelectedAnimeType] = useState<string[]>([]);
  const [selectedAnimeRating, setSelectedAnimeRating] = useState<string[]>([]);
  const [selectedAnimeStatus, setSelectedAnimeStatus] = useState<string[]>([]);

  const handleOnFilterAnimeTypeChange = (value: string[]) => {
    setSelectedAnimeType(value);
  };

  const handleOnFilterAnimeRatingChange = (value: string[]) => {
    setSelectedAnimeRating(value);
  };

  const handleOnFilterAnimeStatusChange = (value: string[]) => {
    setSelectedAnimeStatus(value);
  };

  const handleOnClearAllFilter = () => {
    setSelectedAnimeType([]);
    setSelectedAnimeRating([]);
    setSelectedAnimeStatus([]);
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
          <CheckboxGroup colorScheme="green" defaultValue={selectedAnimeType} onChange={handleOnFilterAnimeTypeChange}>
            <Flex flexWrap="wrap">
              {availableAnimeType.map((option, index) => (
                <FormLabel
                  background={selectedAnimeType.includes(option.value) ? 'green.500' : 'gray.100'}
                  borderRadius="8px"
                  key={index}
                  paddingX="12px"
                  paddingY="4px"
                >
                  <Checkbox
                    _focus={{ outline: 'none' }}
                    _hover={{ cursor: 'pointer' }}
                    backgroundColor={selectedAnimeType.includes(option.value) ? 'green.500' : 'gray.100'}
                    borderRadius="full"
                    display="none"
                    mb="2"
                    mr="2"
                    px="8px"
                    py="2px"
                    size="sm"
                    value={option.value}
                  ></Checkbox>
                  <Text color={selectedAnimeType.includes(option.value) ? 'white' : 'gray.700'} fontSize="xs">
                    {option.label}
                  </Text>
                </FormLabel>
              ))}
            </Flex>
          </CheckboxGroup>
        </Flex>
        <Flex borderBottom="1px solid" borderColor="gray.200" direction="column" padding="16px" width="100%">
          <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
            Rating
          </Text>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={selectedAnimeRating}
            onChange={handleOnFilterAnimeRatingChange}
          >
            <Flex flexWrap="wrap">
              {availableAnimeRating.map((option, index) => (
                <FormLabel
                  background={selectedAnimeRating.includes(option.value) ? 'green.500' : 'gray.100'}
                  borderRadius="8px"
                  key={index}
                  paddingX="12px"
                  paddingY="4px"
                >
                  <Checkbox
                    _focus={{ outline: 'none' }}
                    _hover={{ cursor: 'pointer' }}
                    backgroundColor={selectedAnimeRating.includes(option.value) ? 'green.500' : 'gray.100'}
                    borderRadius="full"
                    display="none"
                    mb="2"
                    mr="2"
                    px="8px"
                    py="2px"
                    size="sm"
                    value={option.value}
                  ></Checkbox>
                  <Text color={selectedAnimeRating.includes(option.value) ? 'white' : 'gray.700'} fontSize="xs">
                    {option.label}
                  </Text>
                </FormLabel>
              ))}
            </Flex>
          </CheckboxGroup>
        </Flex>
        <Flex direction="column" padding="16px" width="100%">
          <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
            Status
          </Text>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={selectedAnimeStatus}
            onChange={handleOnFilterAnimeStatusChange}
          >
            <Flex flexWrap="wrap">
              {availableAnimeStatus.map((option, index) => (
                <FormLabel
                  background={selectedAnimeStatus.includes(option.value) ? 'green.500' : 'gray.100'}
                  borderRadius="8px"
                  key={index}
                  paddingX="12px"
                  paddingY="4px"
                >
                  <Checkbox
                    _focus={{ outline: 'none' }}
                    _hover={{ cursor: 'pointer' }}
                    backgroundColor={selectedAnimeStatus.includes(option.value) ? 'green.500' : 'gray.100'}
                    borderRadius="full"
                    display="none"
                    mb="2"
                    mr="2"
                    px="8px"
                    py="2px"
                    size="sm"
                    value={option.value}
                  ></Checkbox>
                  <Text color={selectedAnimeStatus.includes(option.value) ? 'white' : 'gray.700'} fontSize="xs">
                    {option.label}
                  </Text>
                </FormLabel>
              ))}
            </Flex>
          </CheckboxGroup>
        </Flex>
      </VStack>
    </Box>
  );
};

export default AdvanceSearch;
