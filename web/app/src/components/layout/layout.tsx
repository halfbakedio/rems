import { Box, Flex, VStack } from "@chakra-ui/react";

import { Header } from "@components/header";
import { Sidebar } from "@components/sidebar";

type Props = {
  children?: React.ReactNode,
};

const Layout = ({ children }: Props) => (
  <Flex direction="column" h="100%">
    <Flex flex="1" overflow="hidden">
      <Sidebar />
      <VStack align="stretch" w="100%" spacing={0}>
        <Header />
        <Flex w="100%" h="100%" wrap="wrap">
          <Box p="8px" w="100%" borderTop="1px" borderColor="gray.200">
            {children}
          </Box>
        </Flex>
      </VStack>
    </Flex>
  </Flex>
);

export default Layout;
