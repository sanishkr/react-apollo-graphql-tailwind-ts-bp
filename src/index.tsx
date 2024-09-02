import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { injectMock } from "apollo-mock-http";

import "./index.css";

import { mockData } from "./mocks";
const links = [
  new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  }),
];

injectMock({
  links,
  enableMock: process.env.NODE_ENV === "development",
  targetOperations: ["getCountries"],
  mockData,
});

const client = new ApolloClient({
  link: ApolloLink.from(links),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
