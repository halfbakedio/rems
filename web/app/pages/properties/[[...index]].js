import { useSession } from "@clerk/nextjs";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

import Layout from "@/components/layouts/App";
import AppDrawer from "@/components/AppDrawer";
import { useStore } from "@/lib/store";
import { useApplication } from "@/lib/store/hooks";

const useProperties = () => {
  return useStore((store) => ({
    properties: store.properties,
    getProperties: store.getProperties,
  }));
};

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { session } = useSession();

  const { setContext, setContextMenu, setContextActions } = useApplication();
  const { properties, getProperties } = useProperties();

  useEffect(() => {
    (async () => {
      if (!session) return;
      const token = await session.getToken();
      getProperties(token);
    })();
  }, [session, getProperties]);

  useEffect(() => {
    setContext("properties");
    setContextMenu([]);
    setContextActions([]);
  }, [setContext, setContextMenu, setContextActions]);

  return (
    <>
      <AppDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Box>
        <PropertyList properties={properties} />
      </Box>
    </>
  );
};

PropertiesPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default PropertiesPage;
