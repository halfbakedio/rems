import { ApolloProvider } from "@apollo/client";
import { graphql } from "msw";

import { Header } from "@components/header";
import { graphqlClient } from "@/common/graphql";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = () => (
  <ApolloProvider client={graphqlClient}>
    <Header />
  </ApolloProvider>
);

Default.parameters = {
  msw: {
    handlers: [
      graphql.query("GetProfile", (_req, res, ctx) => {
        return res(
          ctx.data({
            me: {
              email: "user@rems.com",
              image: "",
            },
          }),
        );
      }),
    ],
  },
};
