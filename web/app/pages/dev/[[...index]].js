import { RedirectToSignIn, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

import Layout from "/components/layouts/App";

import styles from "/styles/Shared.module.css";

const APIRequest = ({ service, endpoint }) => {
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  });

  const { session } = useSession();
  const [response, setResponse] = useState("// Click above to run the request");

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

const DevPage = () => {
  return (
    <>
      <SignedIn>
        <APIRequest service="admin" endpoint="me" />
        <APIRequest service="admin" endpoint="users" />
        <APIRequest service="core" endpoint="properties/" />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

DevPage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default DevPage;
