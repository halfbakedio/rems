import { SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "/components/Layout";

import styles from "/styles/Shared.module.css";

const SSRDemoLink = () => (
  <Link href="/ssr-demo">
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Flex alignItems="center">
          <Image alt="SSR demo" src="/icons/sparkles.svg" width="32" height="32" />
          <Heading size="md">Visit the SSR demo page</Heading>
        </Flex>
        <Flex mt="2" alignItems="center">
          <Text fontSize="md">
            See how Clerk hydrates the auth state during SSR and CSR, enabling server-side generation even for
            authenticated pages
          </Text>
          <Image src="/icons/arrow-right.svg" width="32" height="32" alt="Right Arrow" />
        </Flex>
      </Box>
    </Box>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up" className={styles.cardContent}>
    <Image alt="Sign up" width="32" height="32" src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
      <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
    </div>
    <div className={styles.arrow}>
      <Image src="/icons/arrow-right.svg" width="32" height="32" alt="Right Arrow" />
    </div>
  </Link>
);

// Main component using <SignedIn> and <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering
// depending on whether or not a visitor is signed in.
//
// https://clerk.dev/docs/component-reference/signed-in
const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Welcome to your new app</h1>
    <SignedIn>
      <p className={styles.description}>You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p className={styles.description}>Sign up for an account to get started</p>
    </SignedOut>

    <div className={styles.cards}>
      <SignedIn>
        <div className={styles.card}>
          <SSRDemoLink />
        </div>
      </SignedIn>
      <SignedOut>
        <div className={styles.card}>
          <SignupLink />
        </div>
      </SignedOut>
    </div>

    <SignedIn>
      <APIRequest service="admin" endpoint="me" />
      <APIRequest service="admin" endpoint="users" />
      <APIRequest service="properties" endpoint="properties" />
    </SignedIn>
  </main>
);

const APIRequest = ({ service, endpoint }) => {
  React.useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  });

  const { session } = useSession();
  const [response, setResponse] = React.useState("// Click above to run the request");

  const makeRequest = async () => {
    const token = await session.getToken();

    setResponse("// Loading...");

    try {
      const res = await fetch(`/api/${service}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Cookie: `__session=${token}`,
        },
      });
      const body = await res.json();
      setResponse(JSON.stringify(body, null, "  "));
    } catch (e) {
      setResponse("// There was an error with the request.");
    }
  };

  return (
    <div className={styles.backend}>
      <h2>API Request to {`/${service}/${endpoint}`}</h2>
      <div className={styles.card}>
        <button target="_blank" rel="noopener" className={styles.cardContent} onClick={() => makeRequest()}>
          <Image src="/icons/server.svg" width="32" height="32" alt="Server" />
          <div>
            <h3>fetch(&apos;/{service}/{endpoint}&apos;)</h3>
            <p>Retrieve the {endpoint} information from the {service} API</p>
          </div>
          <div className={styles.arrow}>
            <Image src="/icons/download.svg" width="32" height="32" alt="Download" />
          </div>
        </button>
      </div>
      <h4>
        Response
        <em>
          <SignedIn>You are signed in, the request will return information for your user</SignedIn>
          <SignedOut>You are signed out, the request will return null</SignedOut>
        </em>
      </h4>
      <pre>
        <code className="language-js">{response}</code>
      </pre>
    </div>
  );
};

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

Page.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Page;
