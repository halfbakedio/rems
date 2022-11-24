import type { ReactElement } from "react";

import { AdminLayout } from "@/components/layout";

import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h1>hi</h1>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  );
};

export default Page;
