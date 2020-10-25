import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://news-reader.stagnationlab.dev/graphql",
  cache: new InMemoryCache(),
});
