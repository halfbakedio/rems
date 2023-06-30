import propTypes from "prop-types";

import AppShell from "/components/AppShell";

const AppLayout = ({ children }) => (
  <>
    <AppShell>
      {children}
    </AppShell>
  </>
);

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
