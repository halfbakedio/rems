import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const PropertyRow = ({ property }) => (
  <Box
    w="100%"
    p={4}
    _hover={{ bg: "blue.100" }}
  >
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
          bg: "blue.200",
        }}
      />
      <IconButton
        aria-label="Delete property"
        icon={<FiTrash2 />}
        variant="ghost"
        borderRadius="0"
        _hover={{
          borderWidth: "1px",
          bg: "blue.200",
        }}
      />
    </Flex>
  </Box>
);

export default PropertyRow;
