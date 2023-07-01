import { Text } from "@chakra-ui/react";

import Layout from "/components/layouts/App";

const PropertyPage = () => (
  <>
    <Text fontSize="xl">
      Property
    </Text>
  </>
);

PropertyPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default PropertyPage;
