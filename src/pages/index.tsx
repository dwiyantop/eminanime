import { ReactElement } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/layouts/DefaultLayout';
import AdvancedSearch from '@/components/AdvancedSearch';

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container maxWidth="container.xl" padding="24px">
      <Flex gap="24px">
        <AdvancedSearch></AdvancedSearch>
        <Box flex="1">Main Content</Box>
      </Flex>
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
