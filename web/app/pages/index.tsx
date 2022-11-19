import Head from "next/head";

import { Layout } from "@components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>REMS</title>
        <meta name="description" content="Real Estate Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
