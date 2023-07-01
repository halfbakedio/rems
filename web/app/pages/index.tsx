import { SignedIn, SignedOut } from "@clerk/nextjs";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import Layout from "@/components/layouts/App";
import { initializeStore } from "@/lib/store";

const RedirectToSignIn = () => {
  const { push } = useRouter();

  useEffect(() => {
     push("/sign-in");
  }, [push]);

  return <></>;
};

const Main = () => (
  <>
    <SignedIn>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

const Page = () => (
  <>
    <Head>
      <title>Shift - Real Estate Management</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
    <Main />
  </>
);

Page.getLayout = (page: ReactNode) => (
  <>
    <SignedIn>
      <Layout>
        {page}
      </Layout>
    </SignedIn>
    <SignedOut>
      {page}
    </SignedOut>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const appStore = initializeStore();

  return {
    props: {
      initialAppState: JSON.parse(JSON.stringify(appStore.getState())),
    },
  };
};

export default Page;
