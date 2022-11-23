import type { ReactElement } from "react";

import { Layout } from "@/components/layout";
import { Body } from "@components/body";

import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <Body />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Page;
