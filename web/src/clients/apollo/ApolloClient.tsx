import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// Auth link to attach JWT from sessionStorage
const authLink = setContext((_, { headers }) => {
  // Get the token from sessionStorage
  const token = sessionStorage.getItem("token");

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// HTTP link
const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "include", // optional if using cookies too
});

// Apollo Client
export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]), // authLink runs before httpLink
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined", // SSR safe
});
