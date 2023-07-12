import { Text } from "@chakra-ui/react";

import Layout from "/components/layouts/OpenHouse";

const OpenHousePage = () => {
  return (
    <>
      <Text fontSize="xl">
        Open Houses
      </Text>
    </>
  );
};

OpenHousePage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default OpenHousePage;
