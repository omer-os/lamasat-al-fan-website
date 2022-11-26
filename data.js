import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clauzcz0i2dk401uschsk4wk3/master",
  cache: new InMemoryCache(),
});

export default client;
