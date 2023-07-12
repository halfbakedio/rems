import { OrganizationSwitcher } from "@clerk/clerk-react";

import Layout from "/components/layouts/App";

const SettingsPage = () => {
  return (
    <>
      <OrganizationSwitcher />
    </>
  );
};

SettingsPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default SettingsPage;
