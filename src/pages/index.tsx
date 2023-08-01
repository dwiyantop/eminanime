import { ReactElement } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import SearchBar from '@/components/SearchBar';
import AdvancedSearch from '@/components/AdvancedSearch';

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container maxWidth="container.xl" padding="24px">
      <Flex gap="24px">
        <AdvancedSearch />
        <Box flex="1">
          <SearchBar />
        </Box>
      </Flex>
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
