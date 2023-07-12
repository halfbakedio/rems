import { useSession } from "@clerk/nextjs";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import Layout from "@/components/layouts/App";
import { AddPropertyForm } from "@/components/forms";
import { useApplication, useDrawer, useProperties } from "@/lib/store/hooks";

import PropertyList from "./PropertyList";

const PropertiesPage = () => {
  const { session } = useSession();

  const { setContext, setContextMenu, setContextActions } = useApplication();
  const { onOpen, setChildren, setFormId, setTitle } = useDrawer();
  const { properties, getProperties } = useProperties();

  const handleAddProperty = () => {
    setTitle("Add Property");
    setFormId("add-property-form");
    setChildren(<AddPropertyForm />);

    onOpen();
  };

  useEffect(() => {
    (async () => {
      if (!session) {
        return;
      }

      const token = await session.getToken();

      getProperties(token);
    })();
  }, [session, getProperties]);

  useEffect(() => {
    setContext("properties");
    setContextMenu([{ label: "Active" }]);
    setContextActions([{ label: "Add Property", onClick: handleAddProperty }]);

    return () => {
      setContext("");
      setContextMenu([]);
      setContextActions([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
