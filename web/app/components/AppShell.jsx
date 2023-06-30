import { Flex } from "@chakra-ui/react";
import propTypes from "prop-types";

import AppBar from "./AppBar";
import AppContent from "./AppContent";
import AppRail from "./AppRail";

const AppShell = ({ children, showRail, showBar }) => (
  <>
    <Flex>
      {showRail && <AppRail />}
      {showBar && <AppBar />}
      <AppContent>
        {children}
      </AppContent>
    </Flex>
  </>
);

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
