import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "di40ksni",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2022-12-17",
});