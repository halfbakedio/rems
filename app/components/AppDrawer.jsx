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

import { useDrawer } from "@/lib/store/hooks";

const AppDrawer = () => {
  const {
    children,
    formId,
    initialFocusRef,
    isOpen,
    onClose,
    title,
  } = useDrawer();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={initialFocusRef}
      onClose={onClose}
      size={["xs", "sm", "md"]}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {title}
        </DrawerHeader>
        <DrawerBody>
          {children}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit" form={formId}>
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
