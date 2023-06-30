import { Box, Flex } from "@chakra-ui/react";

import AppHeader from "./AppHeader";

const AppContent = ({ children }) => {
  return (
    <Flex
      id="app-content"
      direction="column"
      w="full"
      minH="100vh"
      pl="256px"
    >
      <AppHeader />
      <Box as="main" flex="1" p={3} h="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default AppContent;
