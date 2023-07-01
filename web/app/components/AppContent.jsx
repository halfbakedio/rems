import { Box, Flex } from "@chakra-ui/react";

import { useApplication } from "@/lib/store/hooks";

import AppHeader from "./AppHeader";

const AppContent = ({ children }) => {
  const { contextMenu } = useApplication();

  const paddingLeft = contextMenu?.length > 0 ? "256px" : "64px";

  return (
    <Box w="full" minH="100vh">
      <Flex
        id="app-header"
        as="header"
        position="fixed"
        w="full"
        pl={paddingLeft}
        zIndex="sticky"
      >
        <AppHeader />
      </Flex>
      <Flex
        id="app-content"
        direction="column"
        w="full"
        pl={paddingLeft}
        mt="64px"
      >
        <Box as="main" flex="1" p={3} h="100%">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default AppContent;
