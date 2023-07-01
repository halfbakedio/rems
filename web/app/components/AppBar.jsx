import { Box, Button, Flex } from "@chakra-ui/react";
import { nanoid } from "nanoid";

import { useApplication } from "@/lib/store/hooks";

const AppBarButton = ({ label }) => (
  <Button
    bg="blue.700"
    h="64px"
    borderRadius={0}
    _hover={{
      bg: "blue.600",
      borderLeft: "2px",
    }}
  >
    {label}
  </Button>
);

const AppBar = () => {
  const { contextMenu } = useApplication();

  return (
    <>
      {contextMenu && contextMenu.length > 0 && (
        <Box
          id="app-bar"
          bg="blue.700"
          color="gray.100"
          borderRight="2px"
          borderRightColor="blue.800"
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
            {contextMenu.map((item) => (
              <AppBarButton key={nanoid()} label={item.label} />
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default AppBar;
