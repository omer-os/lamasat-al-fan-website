import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clauzcz0i2dk401uschsk4wk3/master",
  cache: new InMemoryCache(),
});

const SanityClient = createClient({
  projectId: "9zeiwwka",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
const builder = imageUrlBuilder(SanityClient);

function ImageUrlFor(source) {
  return builder.image(source);
}

export { SanityClient, ImageUrlFor };
export default client;
