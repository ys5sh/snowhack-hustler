import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
});
