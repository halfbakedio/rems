import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const OpenHouseLayout = ({ children }) => (
  <>
    <Flex w="100%" h="100vh">
      <Box flex="1" bg={useColorModeValue("gray.100", "gray.900")}>
        {children}
      </Box>
    </Flex>
  </>
);

export default OpenHouseLayout;
