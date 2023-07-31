import type { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <Flex>{children}</Flex>;
};

export default DefaultLayout;
