import propTypes from "prop-types";

import AppShell from "/components/AppShell";

const AppLayout = ({ children }) => {
  return (
    <>
      <AppShell>
        {children}
      </AppShell>
    </>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
