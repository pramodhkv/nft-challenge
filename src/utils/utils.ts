import sanityClient from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

export const urlFor = (source: any) => {
  return imageUrlBuilder(sanityClient).image(source);
};
