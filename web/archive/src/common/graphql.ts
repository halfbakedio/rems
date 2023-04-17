import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { API_V2_URL } from "@/environment";
import authHeader from "@services/auth-header";

const httpLink = createHttpLink({
  uri: [API_V2_URL, "graphql"].join("/"),
});

const authLink = setContext((_, { headers }) => {
  const { Authorization } = authHeader();

  return {
    headers: {
      ...headers,
      Authorization,
    },
  };
});

const graphqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
  queryDeduplication: true,
});

export { graphqlClient };
