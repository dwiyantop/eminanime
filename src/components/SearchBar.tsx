import { Center, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <Flex>
      <Center borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" height="49.8px" paddingX="4px" width="100%">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input fontSize="sm" fontWeight="semibold" placeholder="Search anime" size="md" />
        </InputGroup>
      </Center>
    </Flex>
  );
};

export default SearchBar;
