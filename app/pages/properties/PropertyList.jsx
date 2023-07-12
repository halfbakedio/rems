import { Box } from "@chakra-ui/react";

import PropertyRow from "./PropertyRow";

const PropertyList = ({ properties }) => (
  <Box
    borderWidth="1px"
    borderRadius="md"
    borderColor="gray.100"
    h="100%"
    m={4}
    boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
  >
    {properties.map((property) => (
      <PropertyRow key={property.id} property={property} />
    ))}
  </Box>
);

export default PropertyList;
