import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_TOKEN,
  cache: new InMemoryCache(),
});

export default client;
