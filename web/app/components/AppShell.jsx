import { Flex, useDisclosure } from "@chakra-ui/react";
import propTypes from "prop-types";
import { useEffect } from "react";

import { useDrawer } from "@/lib/store/hooks";

import AppBar from "./AppBar";
import AppContent from "./AppContent";
import AppDrawer from "./AppDrawer";
import AppRail from "./AppRail";

const AppShell = ({ children, showRail, showBar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { setIsOpen, setOnOpen, setOnClose } = useDrawer();
  const { setOnOpen } = useDrawer();

  useEffect(() => {
    // setIsOpen(isOpen);
    setOnOpen(onOpen);
    // setOnClose(onClose);
  // }, [isOpen, onOpen, onClose, setIsOpen, setOnOpen, setOnClose]);
  }, [onOpen, setOnOpen]);

  return (
    <Flex>
      {showRail && <AppRail />}
      {showBar && <AppBar />}
      <AppContent>
        {children}
      </AppContent>
      <AppDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

AppShell.propTypes = {
  children: propTypes.node.isRequired,
  showRail: propTypes.bool,
  showBar: propTypes.bool,
};

AppShell.defaultProps = {
  showRail: true,
  showBar: true,
};

export default AppShell;
