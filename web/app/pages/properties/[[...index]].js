import { useSession } from "@clerk/nextjs";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

import Layout from "@/components/layouts/App";
import { useApplication, useDrawer, useProperties } from "@/lib/store/hooks";

const PropertyRow = ({ property }) => (
  <Box w="100%" p={2}>
    <Flex>
      <VStack alignItems="start">
        <Heading size="sm">Address</Heading>{property.address}
        <Text fontSize='xs'>(xs) In love with React & Next</Text>
      </VStack>
      <Spacer />
      <IconButton
        aria-label="Edit property"
        icon={<FiEdit3 />}
        variant="ghost"
        borderRadius="0"
        _hover={{
          borderWidth: "1px",
          bg: "green.200",
        }}
      />
      <IconButton
        aria-label="Delete property"
        icon={<FiTrash2 />}
        variant="ghost"
        borderRadius="0"
        _hover={{
          borderWidth: "1px",
          bg: "green.100",
        }}
      />
    </Flex>
  </Box>
);

const PropertyList = ({ properties }) => (
  <Box
    borderWidth="1px"
    borderRadius="md"
    h="100%"
    // boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
  >
    {properties.map((property) => (
      <PropertyRow key={property.id} property={property} />
    ))}
  </Box>
);

const PropertiesPage = () => {
  const { session } = useSession();

  const { setContext, setContextMenu, setContextActions } = useApplication();
  const { onClose, onOpen, setOnSubmit, setTitle } = useDrawer();
  const { properties, getProperties } = useProperties();

  const addProperty = () => {
    // eslint-disable-next-line no-console
    console.log("Add property");
    // onClose();
  };

  const handleAddProperty = () => {
    setTitle("Add Property");
    setOnSubmit(addProperty);

    // eslint-disable-next-line no-console
    console.log("on open");
    onOpen();
  };

  useEffect(() => {
    (async () => {
      if (!session) return;
      const token = await session.getToken();
      getProperties(token);
    })();
  }, [session, getProperties]);

  useEffect(() => {
    setContext("properties");
    setContextMenu([{ label: "Active" }]);
    setContextActions([{ label: "Add Property", onClick: handleAddProperty }]);
  }, [setContext, setContextMenu, setContextActions]);

  return (
    <Box>
      <PropertyList properties={properties} />
    </Box>
  );
};

PropertiesPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default PropertiesPage;
