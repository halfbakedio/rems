import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack, useColorMode } from "@chakra-ui/react";

import { Layout } from "@components/layout";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Layout>
        <Flex>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};

export default Page;
