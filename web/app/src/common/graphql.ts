import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import authHeader from "@services/auth-header";

const httpLink = createHttpLink({
  uri: "http://localhost:5100/api/v2/graphql",
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
});

export { graphqlClient };
