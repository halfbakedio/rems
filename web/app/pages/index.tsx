import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import Layout from "@/components/layouts/App";
import { initializeStore } from "@/lib/store";

import styles from "/styles/Shared.module.css";

const Main = () => (
  <main className={styles.main}>
    <SignedIn>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </main>
);

const Page = () => (
  <div className={styles.container}>
    <Head>
      <title>Shift - Real Estate Management</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
    <Main />
  </div>
);

Page.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
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
