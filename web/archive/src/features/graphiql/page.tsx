import GraphiQL from "graphiql";

import authHeader from "@services/auth-header";

import "graphiql/graphiql.min.css";

type Headers = {
  Accept: string,
  "Content-Type": string,
  Authorization?: string | undefined,
};

const GraphiQLPage = () => {
  const { Authorization } = authHeader();
  const headers: Headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (Authorization) {
    headers["Authorization"] = Authorization;
  }

  return (
    <GraphiQL
      fetcher={async (graphQLParams) => {
        const data = await fetch(
          "http://localhost:5100/api/v2/graphql",
          {
            method: "POST",
            headers,
            body: JSON.stringify(graphQLParams),
            credentials: "same-origin",
          },
        );
        return data.json().catch(() => data.text());
      }}
    />
  );
};

export default GraphiQLPage;
