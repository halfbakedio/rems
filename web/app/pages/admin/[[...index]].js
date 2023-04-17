import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "/components/layouts/Admin";
import UserList from "/components/UserList";

const AdminPage = () => {
  const router = useRouter();

  const { index } = router.query;
  const breadbrumbs = index ? `/ admin / ${index}` : "/ admin";

  const renderContent = (context) => {
    switch(context) {
      case "organizations":
        return undefined;
      case "users":
        return <UserList />;
      case "settings":
        return undefined;
      default:
        return undefined;
    }
  };

  return (
    <>
      <SignedIn>
        <Flex
          pr="8"
          height="20"
          alignItems="center"
          bg={{
            base: useColorModeValue("white", "gray.900"),
            md: useColorModeValue("gray.100", "gray.900"),
          }}
        >
          <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
            {breadbrumbs}
          </Text>
        </Flex>
        <Box
          mr="8"
          boxShadow="md"
          bg={useColorModeValue("white", "gray.900")}
          rounded="md"
          p="8"
          minH="20vh"
        >
          {index?.length > 0 && renderContent(index[0])}
        </Box>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

AdminPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default AdminPage;
