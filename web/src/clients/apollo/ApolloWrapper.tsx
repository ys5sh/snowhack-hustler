"use client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode } from "react";
import { client } from "./ApolloClient";

const ApolloWrapper = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
