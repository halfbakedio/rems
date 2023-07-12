import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import Sidebar from "/components/Sidebar";

const AdminLayout = ({ children }) => (
  <>
    <Flex w="100%" h="100vh">
      <Sidebar />
      <Box flex="1" bg={useColorModeValue("gray.100", "gray.900")}>
        {children}
      </Box>
    </Flex>
  </>
);

export default AdminLayout;
