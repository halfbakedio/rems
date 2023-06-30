import { Box, Button, Flex } from "@chakra-ui/react";

const AppBarButton = ({ label }) => (
  <Button
    bg="green.800"
    h="64px"
    borderRadius={0}
    _hover={{
      bg: "green.700",
      borderLeft: "2px",
    }}
  >
    {label}
  </Button>
);

const AppBar = () => {
  return (
    <Box
      id="app-bar"
      bg="green.800"
      color="gray.100"
      borderRight="2px"
      borderRightColor="green.900"
      w="192px"
      left={0}
      top={0}
      minH="100vh"
      position="fixed"
      ml="64px"
      pt="64px"
      zIndex={2}
    >
      <Flex direction="column">
        <AppBarButton label="Box 1" />
        <AppBarButton label="Box 2" />
        <AppBarButton label="Box 3" />
      </Flex>
    </Box>
  );
};

export default AppBar;
