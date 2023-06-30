import {
  // Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  // FormLabel,
  // Input,
  // InputGroup,
  // InputLeftAddon,
  // InputRightAddon,
  // Select,
  // Stack,
  // Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const AppDrawer = ({ children, isOpen, initialFocusRef, onClose, onSubmit, title }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={initialFocusRef}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {title}
        </DrawerHeader>

        <DrawerBody>
          {children}
          {/* <Stack spacing="24px"> */}
          {/*   <Box> */}
          {/*     <FormLabel htmlFor="username">Name</FormLabel> */}
          {/*     <Input */}
          {/*       ref={firstField} */}
          {/*       id="username" */}
          {/*       placeholder="Please enter user name" */}
          {/*     /> */}
          {/*   </Box> */}
          {/*   <Box> */}
          {/*     <FormLabel htmlFor="url">Url</FormLabel> */}
          {/*     <InputGroup> */}
          {/*       <InputLeftAddon>http://</InputLeftAddon> */}
          {/*       <Input */}
          {/*         type="url" */}
          {/*         id="url" */}
          {/*         placeholder="Please enter domain" */}
          {/*       /> */}
          {/*       <InputRightAddon>.com</InputRightAddon> */}
          {/*     </InputGroup> */}
          {/*   </Box> */}
          {/**/}
          {/*   <Box> */}
          {/*     <FormLabel htmlFor="owner">Select Owner</FormLabel> */}
          {/*     <Select id="owner" defaultValue="segun"> */}
          {/*       <option value="segun">Segun Adebayo</option> */}
          {/*       <option value="kola">Kola Tioluwani</option> */}
          {/*     </Select> */}
          {/*   </Box> */}
          {/**/}
          {/*   <Box> */}
          {/*     <FormLabel htmlFor="desc">Description</FormLabel> */}
          {/*     <Textarea id="desc" /> */}
          {/*   </Box> */}
          {/* </Stack> */}
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={onSubmit}>
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

AppDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  initialFocusRef: PropTypes.shape({ current: PropTypes.any }),
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

AppDrawer.defaultProps = {
  initialFocusRef: null,
};

export default AppDrawer;
