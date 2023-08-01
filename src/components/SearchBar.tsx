import { Center, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({
  searchQuery,
  onQueryChange,
}: {
  searchQuery: string;
  onQueryChange?: (value: string) => void;
}) => {
  const handleQueryOnChange = (value: string) => {
    onQueryChange && onQueryChange(value);
  };
  return (
    <Flex>
      <Center borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" height="49.8px" paddingX="4px" width="100%">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            fontSize="sm"
            fontWeight="semibold"
            onChange={e => handleQueryOnChange(e.target.value as string)}
            placeholder="Search anime"
            size="md"
            value={searchQuery ?? ''}
          />
        </InputGroup>
      </Center>
    </Flex>
  );
};

export default SearchBar;
