import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { useDrawer } from "@/lib/store/hooks";

const AppDrawer = ({ isOpen, onClose }) => {
  // const { isOpen, initialFocusRef, onClose, onSubmit, title } = useDrawer();
  const { initialFocusRef, onSubmit, title } = useDrawer();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      // initialFocusRef={initialFocusRef}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {title}
        </DrawerHeader>
        <DrawerBody>
          <p>Drawer contents...</p>
          {/* {children} */}
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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

AppDrawer.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

export default AppDrawer;
