import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const SanityClient = createClient({
  projectId: "301w11sr",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
const builder = ImageUrlBuilder(SanityClient);

export function urlFor(source) {
  return builder.image(source);
}
