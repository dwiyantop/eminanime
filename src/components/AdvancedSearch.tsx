import { useState } from 'react';
import { Button, Checkbox, CheckboxGroup, Flex, FormLabel, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { ANIME_TYPES } from '@/constants';

const AdvanceSearch = () => {
  const availableAnimeType = ANIME_TYPES;
  const [selectedType, setSelectedType] = useState<string[]>([]);

  const handleOnFilterTypeChange = (value: string[]) => {
    setSelectedType(value);
  };

  return (
    <VStack borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" gap="0" width="280px">
      <Flex alignItems="center" borderBottom="1px solid" borderColor="gray.200" padding="16px" width="100%">
        <Heading size="xs">Advanced Search</Heading>
        <Spacer />
        <Button colorScheme="teal" size="xs" variant="link">
          Clear All
        </Button>
      </Flex>
      <Flex borderBottom="1px solid" borderColor="gray.200" direction="column" padding="16px" width="100%">
        <Text fontSize="xs" fontWeight="bold" marginBottom="8px">
          Category
        </Text>
        <CheckboxGroup colorScheme="green" defaultValue={selectedType} onChange={handleOnFilterTypeChange}>
          <Flex flexWrap="wrap">
            {availableAnimeType.map((option, index) => (
              <FormLabel
                background={selectedType.includes(option.value) ? 'green.500' : 'gray.100'}
                borderRadius="8px"
                key={index}
                paddingX="12px"
                paddingY="4px"
              >
                <Checkbox
                  _focus={{ outline: 'none' }}
                  _hover={{ cursor: 'pointer' }}
                  backgroundColor={selectedType.includes(option.value) ? 'green.500' : 'gray.100'}
                  borderRadius="full"
                  display="none"
                  mb="2"
                  mr="2"
                  px="8px"
                  py="2px"
                  size="sm"
                  value={option.value}
                ></Checkbox>
                <Text color={selectedType.includes(option.value) ? 'white' : 'gray.700'} fontSize="xs">
                  {option.label}
                </Text>
              </FormLabel>
            ))}
          </Flex>
        </CheckboxGroup>
      </Flex>
    </VStack>
  );
};

export default AdvanceSearch;
